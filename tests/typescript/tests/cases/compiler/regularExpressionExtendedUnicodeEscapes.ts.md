__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 15,
                  "end": 21
                },
                "start": 15,
                "end": 23
              },
              "start": 13,
              "end": 23
            },
            "start": 6,
            "end": 23
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": ""
                },
                "start": 29,
                "end": 51
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/u",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": "u"
                },
                "start": 54,
                "end": 77
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/v",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": "v"
                },
                "start": 80,
                "end": 103
              }
            ],
            "start": 26,
            "end": 106
          },
          "definite": false,
          "start": 6,
          "end": 106
        }
      ],
      "declare": false,
      "start": 0,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
