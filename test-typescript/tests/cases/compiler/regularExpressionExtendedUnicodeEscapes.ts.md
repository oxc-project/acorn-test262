regularExpressionExtendedUnicodeEscapes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 106,
          "definite": false,
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
                    "optional": false
                  }
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
                "raw": "/\\u{10000}[\\u{10000}]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\u{10000}[\\u{10000}]"
                },
                "value": {}
              },
              {
                "type": "Literal",
                "start": 54,
                "end": 77,
                "raw": "/\\u{10000}[\\u{10000}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\u{10000}[\\u{10000}]"
                },
                "value": {}
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 103,
                "raw": "/\\u{10000}[\\u{10000}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\u{10000}[\\u{10000}]"
                },
                "value": {}
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
