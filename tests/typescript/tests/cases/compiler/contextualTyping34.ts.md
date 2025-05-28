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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 35,
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
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 11,
              "end": 25,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 13,
                  "end": 24,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 15,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 15,
                    "end": 23,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 17,
                      "end": 23
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 28,
              "end": 34,
              "properties": [
                {
                  "type": "Property",
                  "start": 29,
                  "end": 33,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 31,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "value": 4,
                    "raw": "4"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
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
