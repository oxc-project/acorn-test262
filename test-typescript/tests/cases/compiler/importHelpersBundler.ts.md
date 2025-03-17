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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 31,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 19,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "name": "__rest",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 30,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 27,
                  "end": 30
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 92,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "name": "args",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 29,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                  "id": {
                    "type": "ObjectPattern",
                    "start": 41,
                    "end": 62,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 43,
                        "end": 46,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 46,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 46,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 48,
                        "end": 60,
                        "argument": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 60,
                          "name": "extraArgs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 73,
              "end": 90,
              "argument": {
                "type": "Identifier",
                "start": 80,
                "end": 89,
                "name": "extraArgs",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
