__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 418,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 57,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 41,
        "end": 57,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "name": "f",
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
        "start": 98,
        "end": 137,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 108,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 111,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "name": "bar",
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
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 138,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "name": "NS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 151,
        "end": 207,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 155,
            "end": 178,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 162,
              "end": 178,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 168,
                  "end": 177,
                  "id": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 171,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 177,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 220,
            "end": 224,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 266,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 250,
        "end": 266,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 254,
            "end": 265,
            "id": {
              "type": "Identifier",
              "start": 254,
              "end": 258,
              "name": "bar1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 261,
              "end": 265,
              "name": "bar1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 294,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 305,
        "name": "f1",
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
        "start": 308,
        "end": 347,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 312,
            "end": 328,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 327,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "name": "bar1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 327,
                  "name": "bar1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 348,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 361,
        "name": "NS1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 362,
        "end": 418,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 366,
            "end": 389,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 373,
              "end": 389,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 377,
                  "end": 388,
                  "id": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 381,
                    "name": "bar1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 388,
                    "name": "bar1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
