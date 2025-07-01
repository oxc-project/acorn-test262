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
                "raw": "/[[]/",
                "regex": {
                  "pattern": "[[]",
                  "flags": ""
                },
                "start": 30,
                "end": 35
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[[]/u",
                "regex": {
                  "pattern": "[[]",
                  "flags": "u"
                },
                "start": 49,
                "end": 55
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[[]/v",
                "regex": {
                  "pattern": "[[]",
                  "flags": "v"
                },
                "start": 68,
                "end": 74
              }
            ],
            "start": 26,
            "end": 137
          },
          "definite": false,
          "start": 6,
          "end": 137
        }
      ],
      "declare": false,
      "start": 0,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
