__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 39,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 52,
              "decorators": [],
              "name": "fooA",
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 112,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 106,
              "end": 112,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 110,
                  "end": 111,
                  "id": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
            "start": 117,
            "end": 146,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "fooB",
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
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
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
