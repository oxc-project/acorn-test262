__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "name": "$",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 25,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 17,
                    "end": 23,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 18,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 20,
                        "end": 23
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 38,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 37,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 36,
        "object": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "name": "$",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
