__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 89,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 89,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 20,
            "end": 43,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 41,
              "end": 43,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 36,
                "end": 40
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 87,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 56,
              "end": 87,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 87,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 68,
                    "end": 87,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 78,
                        "end": 81,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 81,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 81,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      }
                    ]
                  }
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
