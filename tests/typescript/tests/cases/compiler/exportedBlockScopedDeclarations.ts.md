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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 53,
              "end": 56,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
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
      "start": 85,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "f",
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
        "start": 98,
        "end": 137,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 118,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 108,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 111,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 138,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 168,
                  "end": 177,
                  "id": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 171,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 177,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 220,
            "end": 224,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 254,
            "end": 265,
            "id": {
              "type": "Identifier",
              "start": 254,
              "end": 258,
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 261,
              "end": 265,
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null
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
      "start": 294,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 305,
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
        "start": 308,
        "end": 347,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 312,
            "end": 328,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 327,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "bar1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 327,
                  "decorators": [],
                  "name": "bar1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 348,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 361,
        "decorators": [],
        "name": "NS1",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 377,
                  "end": 388,
                  "id": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 381,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 388,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
