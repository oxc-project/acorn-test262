__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ok1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 82,
                  "end": 83
                },
                "definite": false,
                "start": 76,
                "end": 83
              }
            ],
            "declare": false,
            "start": 72,
            "end": 84
          }
        ],
        "start": 14,
        "end": 86
      },
      "expression": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ok2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 167
                },
                "init": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "'hi'",
                  "start": 170,
                  "end": 174
                },
                "definite": false,
                "start": 164,
                "end": 174
              }
            ],
            "declare": false,
            "start": 160,
            "end": 175
          }
        ],
        "start": 102,
        "end": 177
      },
      "expression": false,
      "start": 88,
      "end": 177
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notOK",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 208,
            "end": 209
          },
          "definite": false,
          "start": 200,
          "end": 209
        }
      ],
      "declare": false,
      "start": 196,
      "end": 210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
