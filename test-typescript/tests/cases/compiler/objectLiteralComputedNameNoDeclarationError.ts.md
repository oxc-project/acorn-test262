__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 49,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 46,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 24,
                  "name": "BANANA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 26,
                  "end": 46,
                  "expression": {
                    "type": "Literal",
                    "start": 26,
                    "end": 34,
                    "value": "banana",
                    "raw": "'banana'"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 46,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 46,
                      "value": "banana",
                      "raw": "'banana'"
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 94,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 64,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "name": "Baa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 70,
              "end": 93,
              "properties": [
                {
                  "type": "Property",
                  "start": 76,
                  "end": 91,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 77,
                    "end": 87,
                    "object": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 80,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 87,
                      "name": "BANANA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 90,
                    "end": 91,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
