__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 50,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 43,
          "decorators": [],
          "name": "moduleName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 43,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 37,
              "end": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 49,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 46,
          "end": 49
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 52,
      "end": 128,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 72,
        "end": 128,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 78,
            "end": 126,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 85,
              "end": 126,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 94,
                "end": 106,
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 110,
                      "end": 116
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 125,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 67,
        "end": 71,
        "raw": "\"fs\"",
        "value": "fs"
      }
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
  "start": 35,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 43,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 46,
            "end": 59,
            "arguments": [
              {
                "type": "Literal",
                "start": 54,
                "end": 58,
                "raw": "\"fs\"",
                "value": "fs"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 71,
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 74,
            "end": 99,
            "arguments": [
              {
                "type": "Literal",
                "start": 90,
                "end": 98,
                "raw": "\"/a/b/c\"",
                "value": "/a/b/c"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 74,
              "end": 89,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 76,
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 89,
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
