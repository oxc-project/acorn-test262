__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 26,
              "raw": "\"test\"",
              "value": "test",
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 36,
        "end": 77,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 52,
          "end": 77,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 56,
              "end": 75,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 74,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 66,
                    "end": 74,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 68,
                        "end": 72,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 72,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 72,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
