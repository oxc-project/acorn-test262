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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 18,
          "end": 24
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 188,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 88,
        "end": 188,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 102,
          "end": 188,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 136,
              "end": 170,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 169,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
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
                            "value": "a",
                            "raw": "'a'"
                          },
                          {
                            "type": "Literal",
                            "start": 163,
                            "end": 166,
                            "value": "b",
                            "raw": "'b'"
                          }
                        ]
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 201,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 251,
      "end": 292,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 258,
        "end": 292,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 264,
            "end": 291,
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
              "callee": {
                "type": "Identifier",
                "start": 274,
                "end": 277,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "value": "a",
                      "raw": "'a'"
                    },
                    {
                      "type": "Literal",
                      "start": 285,
                      "end": 288,
                      "value": "b",
                      "raw": "'b'"
                    }
                  ]
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 331,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
