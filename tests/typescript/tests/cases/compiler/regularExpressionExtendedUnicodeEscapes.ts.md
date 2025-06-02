__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 107,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 23,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 15,
                "end": 23,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 15,
                  "end": 21,
                  "typeName": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 26,
            "end": 106,
            "elements": [
              {
                "type": "Literal",
                "start": 29,
                "end": 51,
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 54,
                "end": 77,
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/u",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 103,
                "value": null,
                "raw": "/\\u{10000}[\\u{10000}]/v",
                "regex": {
                  "pattern": "\\u{10000}[\\u{10000}]",
                  "flags": "v"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
