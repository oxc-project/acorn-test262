__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 181,
  "end": 235,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 189,
            "end": 213,
            "properties": [
              {
                "type": "Property",
                "start": 195,
                "end": 200,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 198,
                  "end": 200,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 207,
                "end": 211,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 210,
                  "end": 211,
                  "raw": "5",
                  "value": 5
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 228,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 228,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 222,
                "end": 228
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 231,
            "end": 234,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "a",
              "optional": false
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
