__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 31,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 19,
            "end": 30,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "__rest",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 30,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 27,
                  "end": 30
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "var"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 93,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 92,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 92,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 31,
          "end": 92,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 35,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 41,
                  "end": 69,
                  "definite": false,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 41,
                    "end": 62,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 43,
                        "end": 46,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 46,
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
                          "start": 43,
                          "end": 46,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 48,
                        "end": 60,
                        "argument": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 60,
                          "decorators": [],
                          "name": "extraArgs",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ReturnStatement",
              "start": 73,
              "end": 90,
              "argument": {
                "type": "Identifier",
                "start": 80,
                "end": 89,
                "decorators": [],
                "name": "extraArgs",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 29,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              }
            }
          }
        ]
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
