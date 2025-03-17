__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 310,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "decorators": [],
            "name": "ai",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 18,
                "end": 50,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 31,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 32,
                      "end": 38
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 40,
                      "end": 49
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 31,
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 118,
            "decorators": [],
            "name": "aio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 118,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 90,
                  "end": 118,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 91,
                      "end": 97
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 99,
                      "end": 108
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 110,
                      "end": 117
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 90,
                  "decorators": [],
                  "name": "AsyncIteratorObject",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 166,
            "decorators": [],
            "name": "ag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 166,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 152,
                  "end": 166,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 161,
                      "end": 165
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 152,
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 309,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 309,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 213,
            "end": 235,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 225,
                "end": 234,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 228,
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "aio",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 240,
            "end": 261,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 260,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 255,
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 260,
                  "decorators": [],
                  "name": "ag",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          },
          {
            "type": "VariableDeclaration",
            "start": 286,
            "end": 307,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 298,
                "end": 306,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 301,
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "ai",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
        "decorators": [],
        "name": "f",
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
