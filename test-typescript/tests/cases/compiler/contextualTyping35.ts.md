__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 10,
            "end": 45,
            "expression": {
              "type": "ObjectExpression",
              "start": 27,
              "end": 45,
              "properties": [
                {
                  "type": "Property",
                  "start": 28,
                  "end": 32,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 30,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "raw": "4",
                    "value": 4
                  }
                },
                {
                  "type": "Property",
                  "start": 34,
                  "end": 44,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 38,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 40,
                    "end": 44,
                    "raw": "\"as\"",
                    "value": "as"
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 15,
                    "decorators": [],
                    "name": "id",
                    "optional": false
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
