__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 22,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 22,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 8,
                "end": 22,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 8,
                  "end": 20,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 9,
                      "end": 19,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 11,
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
                        "start": 11,
                        "end": 18,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 12,
                          "end": 18
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 25,
            "end": 53,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 26,
                "end": 32,
                "properties": [
                  {
                    "type": "Property",
                    "start": 27,
                    "end": 31,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 29,
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
                      "start": 30,
                      "end": 31,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 34,
                "end": 52,
                "properties": [
                  {
                    "type": "Property",
                    "start": 35,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 37,
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
                      "start": 38,
                      "end": 39,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 41,
                    "end": 51,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 45,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 46,
                      "end": 51,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
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
