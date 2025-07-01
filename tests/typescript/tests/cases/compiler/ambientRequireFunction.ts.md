__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "moduleName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            },
            "start": 35,
            "end": 43
          },
          "start": 25,
          "end": 43
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 46,
          "end": 49
        },
        "start": 44,
        "end": 49
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 67,
        "end": 71
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 106
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 110,
                      "end": 116
                    },
                    "start": 108,
                    "end": 116
                  },
                  "start": 107,
                  "end": 116
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                },
                "start": 117,
                "end": 125
              },
              "body": null,
              "expression": false,
              "start": 85,
              "end": 126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 78,
            "end": 126
          }
        ],
        "start": 72,
        "end": 128
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 52,
      "end": 128
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 43
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 53
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fs",
                "raw": "\"fs\"",
                "start": 54,
                "end": 58
              }
            ],
            "optional": false,
            "start": 46,
            "end": 59
          },
          "definite": false,
          "start": 41,
          "end": 59
        }
      ],
      "declare": false,
      "start": 35,
      "end": 60
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 76
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 74,
              "end": 89
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/a/b/c",
                "raw": "\"/a/b/c\"",
                "start": 90,
                "end": 98
              }
            ],
            "optional": false,
            "start": 74,
            "end": 99
          },
          "definite": false,
          "start": 67,
          "end": 99
        }
      ],
      "declare": false,
      "start": 61,
      "end": 100
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 100
}
```
