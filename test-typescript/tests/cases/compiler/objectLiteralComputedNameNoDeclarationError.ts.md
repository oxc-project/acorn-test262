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
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 24,
                  "decorators": [],
                  "name": "BANANA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 26,
                  "end": 46,
                  "expression": {
                    "type": "Literal",
                    "start": 26,
                    "end": 34,
                    "raw": "'banana'",
                    "value": "banana"
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 46,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 46,
                      "raw": "'banana'",
                      "value": "banana"
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 64,
            "end": 93,
            "definite": false,
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
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 77,
                    "end": 87,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 80,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 87,
                      "decorators": [],
                      "name": "BANANA",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 90,
                    "end": 91,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
