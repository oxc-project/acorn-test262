__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 97,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 71,
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 69,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 69,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 68,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 68,
                    "decorators": [],
                    "name": "POINT",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 62,
                        "end": 68
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 37,
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 72,
      "end": 96,
      "declaration": {
        "type": "Identifier",
        "start": 87,
        "end": 95,
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 101,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 101,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 27,
          "end": 101,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 31,
              "end": 99,
              "argument": {
                "type": "Literal",
                "start": 90,
                "end": 97,
                "raw": "'Point'",
                "value": "Point"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
