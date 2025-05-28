__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            },
            "body": {
              "type": "BlockStatement",
              "start": 41,
              "end": 43,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 87,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 56,
              "end": 87,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 87,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 81,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 81,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
  "sourceType": "script",
  "hashbang": null
}
```
