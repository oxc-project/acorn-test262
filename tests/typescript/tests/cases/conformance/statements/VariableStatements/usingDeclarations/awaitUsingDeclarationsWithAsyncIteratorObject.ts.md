__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "ai",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 31
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 31,
                  "end": 50
                },
                "start": 18,
                "end": 50
              },
              "start": 16,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aio",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 90
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 90,
                  "end": 118
                },
                "start": 71,
                "end": 118
              },
              "start": 69,
              "end": 118
            },
            "start": 66,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 118
        }
      ],
      "declare": true,
      "start": 52,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 152
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 152,
                  "end": 166
                },
                "start": 138,
                "end": 166
              },
              "start": 136,
              "end": 166
            },
            "start": 134,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 166
        }
      ],
      "declare": true,
      "start": 120,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 228
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aio",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "definite": false,
                "start": 225,
                "end": 234
              }
            ],
            "declare": false,
            "start": 213,
            "end": 235
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 260
                },
                "definite": false,
                "start": 252,
                "end": 260
              }
            ],
            "declare": false,
            "start": 240,
            "end": 261
          },
          {
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "it2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 301
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ai",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "definite": false,
                "start": 298,
                "end": 306
              }
            ],
            "declare": false,
            "start": 286,
            "end": 307
          }
        ],
        "start": 188,
        "end": 309
      },
      "expression": false,
      "start": 169,
      "end": 309
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 309
}
```
