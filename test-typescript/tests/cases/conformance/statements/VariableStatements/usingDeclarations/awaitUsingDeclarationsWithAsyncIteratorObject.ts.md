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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "name": "ai",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 18,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 31,
                  "name": "AsyncIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 118,
            "name": "aio",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 90,
                  "name": "AsyncIteratorObject",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 166,
            "name": "ag",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 152,
                  "name": "AsyncGenerator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 228,
                  "name": "it0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "name": "aio",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 255,
                  "name": "it1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 260,
                  "name": "ag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 301,
                  "name": "it2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "name": "ai",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
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
