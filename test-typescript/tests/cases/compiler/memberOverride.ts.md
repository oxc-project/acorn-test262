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
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 198,
                  "end": 200,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 207,
                "end": 211,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 210,
                  "end": 211,
                  "value": 5,
                  "raw": "5"
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
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 228,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 228,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 222,
                "end": 228
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 231,
            "end": 234,
            "object": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
