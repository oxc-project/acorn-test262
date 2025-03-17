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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 89,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 20,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "name": "bar",
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
              "start": 41,
              "end": 43,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
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
            "declaration": {
              "type": "VariableDeclaration",
              "start": 56,
              "end": 87,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 87,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
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
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 81,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 81,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
