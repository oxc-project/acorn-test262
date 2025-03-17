__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 171,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 34,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 39,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 52,
              "name": "fooA",
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
              "start": 55,
              "end": 68,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 57,
                  "end": 66,
                  "argument": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 112,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 106,
              "end": 112,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 110,
                  "end": 111,
                  "id": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 117,
            "end": 146,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "name": "fooB",
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
              "start": 133,
              "end": 146,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 135,
                  "end": 144,
                  "argument": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
