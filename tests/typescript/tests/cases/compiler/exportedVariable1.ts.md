__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 14
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 18,
                    "end": 22
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Bill",
                    "raw": "\"Bill\"",
                    "start": 24,
                    "end": 30
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 18,
                  "end": 30
                }
              ],
              "start": 17,
              "end": 31
            },
            "definite": false,
            "start": 11,
            "end": 31
          }
        ],
        "declare": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "upper",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 42
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 53
                },
                "optional": false,
                "computed": false,
                "start": 45,
                "end": 53
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toUpperCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 65
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 65
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 45,
            "end": 67
          },
          "definite": false,
          "start": 37,
          "end": 67
        }
      ],
      "declare": false,
      "start": 33,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
