__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "parent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 17,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 32,
            "name": "parent2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 35,
            "end": 39,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 41,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "name": "use",
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
          "start": 62,
          "end": 68,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 68,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 65,
              "end": 68
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 106,
                  "name": "parent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 129,
                  "name": "parent2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 132,
                  "end": 133,
                  "value": 2,
                  "raw": "2"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 140,
            "end": 234,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "b",
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
                "start": 151,
                "end": 165,
                "name": "parent",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 159,
                    "end": 165
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 167,
                "end": 182,
                "name": "parent2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 176,
                    "end": 182
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 234,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 194,
                  "end": 206,
                  "expression": {
                    "type": "CallExpression",
                    "start": 194,
                    "end": 205,
                    "callee": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 197,
                      "name": "use",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 198,
                        "end": 204,
                        "name": "parent",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 228,
                  "expression": {
                    "type": "CallExpression",
                    "start": 215,
                    "end": 227,
                    "callee": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "name": "use",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 219,
                        "end": 226,
                        "name": "parent2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
