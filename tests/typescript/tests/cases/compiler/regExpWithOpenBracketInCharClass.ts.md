__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 138,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 137,
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
            "end": 137,
            "elements": [
              {
                "type": "Literal",
                "start": 30,
                "end": 35,
                "value": null,
                "raw": "/[[]/",
                "regex": {
                  "pattern": "[[]",
                  "flags": ""
                }
              },
              {
                "type": "Literal",
                "start": 49,
                "end": 55,
                "value": null,
                "raw": "/[[]/u",
                "regex": {
                  "pattern": "[[]",
                  "flags": "u"
                }
              },
              {
                "type": "Literal",
                "start": 68,
                "end": 74,
                "value": null,
                "raw": "/[[]/v",
                "regex": {
                  "pattern": "[[]",
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
