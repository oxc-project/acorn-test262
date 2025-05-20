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
  "end": 99,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 62,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 34,
                  "end": 55,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 36,
                      "end": 39,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 39,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 39,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "RestElement",
                      "start": 41,
                      "end": 53,
                      "argument": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 53,
                        "decorators": [],
                        "name": "extraArgs",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 66,
            "end": 83,
            "argument": {
              "type": "Identifier",
              "start": 73,
              "end": 82,
              "decorators": [],
              "name": "extraArgs",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 22,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 19,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 86,
      "end": 99,
      "expression": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
