__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "parent",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 17,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 32,
            "decorators": [],
            "name": "parent2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 35,
            "end": 39,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 41,
      "end": 70,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 68,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 68,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 65,
              "end": 68
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 236,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 236,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 96,
            "end": 111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 100,
                "end": 110,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 116,
            "end": 134,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 133,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 129,
                  "decorators": [],
                  "name": "parent2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 132,
                  "end": 133,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "FunctionDeclaration",
            "start": 140,
            "end": 234,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 234,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 194,
                  "end": 206,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 194,
                    "end": 205,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 198,
                        "end": 204,
                        "decorators": [],
                        "name": "parent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 197,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 228,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 215,
                    "end": 227,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 219,
                        "end": 226,
                        "decorators": [],
                        "name": "parent2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "decorators": [],
                      "name": "use",
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
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 151,
                "end": 165,
                "decorators": [],
                "name": "parent",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 159,
                    "end": 165
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 167,
                "end": 182,
                "decorators": [],
                "name": "parent2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 176,
                    "end": 182
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
