__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 137,
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
            "end": 137,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 35,
                "raw": "/[[]/",
                "regex": {
                  "flags": "",
                  "pattern": "[[]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 49,
                "end": 55,
                "raw": "/[[]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[[]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 68,
                "end": 74,
                "raw": "/[[]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[[]"
                },
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
