__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 198,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 195,
                "end": 200
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 210,
                  "end": 211
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 207,
                "end": 211
              }
            ],
            "start": 189,
            "end": 213
          },
          "definite": false,
          "start": 185,
          "end": 213
        }
      ],
      "declare": false,
      "start": 181,
      "end": 213
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 222,
                "end": 228
              },
              "start": 220,
              "end": 228
            },
            "start": 219,
            "end": 228
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "optional": false,
            "computed": false,
            "start": 231,
            "end": 234
          },
          "definite": false,
          "start": 219,
          "end": 234
        }
      ],
      "declare": false,
      "start": 215,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 181,
  "end": 235
}
```
