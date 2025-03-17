__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 17,
              "end": 31,
              "properties": [
                {
                  "type": "Property",
                  "start": 18,
                  "end": 30,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 18,
                    "end": 22,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 30,
                    "value": "Bill",
                    "raw": "\"Bill\""
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 42,
            "name": "upper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 45,
            "end": 67,
            "callee": {
              "type": "MemberExpression",
              "start": 45,
              "end": 65,
              "object": {
                "type": "MemberExpression",
                "start": 45,
                "end": 53,
                "object": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 53,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 65,
                "name": "toUpperCase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
