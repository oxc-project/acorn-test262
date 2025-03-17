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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "name": "regexes",
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
                    "name": "RegExp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                  "flags": "",
                  "pattern": "[[]"
                }
              },
              {
                "type": "Literal",
                "start": 49,
                "end": 55,
                "value": null,
                "raw": "/[[]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[[]"
                }
              },
              {
                "type": "Literal",
                "start": 68,
                "end": 74,
                "value": null,
                "raw": "/[[]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[[]"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
