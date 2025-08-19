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
            "name": "fromDts",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "789n",
            "bigint": "789",
            "start": 24,
            "end": 28
          },
          "definite": false,
          "start": 14,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lib",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 69
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "999n",
                  "bigint": "999",
                  "start": 72,
                  "end": 76
                },
                "definite": false,
                "start": 64,
                "end": 76
              }
            ],
            "declare": false,
            "start": 58,
            "end": 77
          }
        ],
        "start": 52,
        "end": 79
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 30,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 43
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 46,
            "end": 50
          },
          "definite": false,
          "start": 42,
          "end": 50
        }
      ],
      "declare": true,
      "start": 28,
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
            "name": "regular",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 96
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "456n",
            "bigint": "456",
            "start": 99,
            "end": 103
          },
          "definite": false,
          "start": 89,
          "end": 103
        }
      ],
      "declare": false,
      "start": 83,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 28,
  "end": 104
}
```
