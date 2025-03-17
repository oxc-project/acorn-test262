__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 123,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 46,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 40,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 44,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "x",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 50,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 122,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 65,
            "end": 75,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 69,
                "end": 74,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 80,
            "end": 120,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 119,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 88,
                  "end": 119,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 98,
                      "end": 102,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 112,
                      "end": 113,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 113,
                        "name": "x",
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
            "kind": "var",
            "declare": false
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
