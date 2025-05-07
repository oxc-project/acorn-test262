__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 10,
            "end": 35,
            "expression": {
              "type": "ObjectExpression",
              "start": 28,
              "end": 34,
              "properties": [
                {
                  "type": "Property",
                  "start": 29,
                  "end": 33,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 31,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "raw": "4",
                    "value": 4,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 11,
              "end": 25,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 13,
                  "end": 24,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 15,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 15,
                    "end": 23,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 17,
                      "end": 23
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
