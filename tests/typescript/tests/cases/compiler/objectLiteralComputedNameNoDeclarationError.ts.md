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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 24,
                  "decorators": [],
                  "name": "BANANA",
                  "optional": false,
                  "typeAnnotation": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 64,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "Baa",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "start": 77,
                    "end": 87,
                    "object": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 80,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 87,
                      "decorators": [],
                      "name": "BANANA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 90,
                    "end": 91,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
