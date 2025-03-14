regularExpressionCharacterClassRangeOrder.ts
```json
{
  "type": "Program",
  "start": 307,
  "end": 721,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 330,
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 330,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 322,
                "end": 330,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 322,
                  "end": 328,
                  "typeName": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 328,
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
            "start": 333,
            "end": 719,
            "elements": [
              {
                "type": "Literal",
                "start": 336,
                "end": 352,
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/",
                "regex": {
                  "flags": "",
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 355,
                "end": 372,
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 375,
                "end": 392,
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 396,
                "end": 440,
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/",
                "regex": {
                  "flags": "",
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 443,
                "end": 488,
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 491,
                "end": 536,
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 540,
                "end": 596,
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/",
                "regex": {
                  "flags": "",
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 599,
                "end": 656,
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
                },
                "value": null
              },
              {
                "type": "Literal",
                "start": 659,
                "end": 716,
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
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
  "sourceType": "script"
}
```
