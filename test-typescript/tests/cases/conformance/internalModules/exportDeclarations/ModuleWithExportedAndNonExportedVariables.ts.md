__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 61,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 61,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 43,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 43,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 43,
                    "raw": "'hello world'",
                    "value": "hello world",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 48,
            "end": 59,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 52,
                "end": 58,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 56,
                  "end": 58,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 87,
            "end": 90,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 138,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
