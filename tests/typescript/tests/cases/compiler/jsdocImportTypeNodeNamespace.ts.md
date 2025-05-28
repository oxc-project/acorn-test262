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
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 37,
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 69,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 69,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 68,
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
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
        "id": null,
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                "value": "Point",
                "raw": "'Point'"
              }
            }
          ]
        },
        "expression": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
