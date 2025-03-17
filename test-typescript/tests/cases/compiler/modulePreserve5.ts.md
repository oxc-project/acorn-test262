__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 39,
          "end": 51,
          "key": {
            "type": "Identifier",
            "start": 39,
            "end": 43,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 45,
            "end": 51,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 31,
        "raw": "\"./data.json\"",
        "value": "./data.json"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "data1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 66,
            "decorators": [],
            "name": "data2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 69,
            "end": 124,
            "argument": {
              "type": "ImportExpression",
              "start": 75,
              "end": 124,
              "options": {
                "type": "ObjectExpression",
                "start": 97,
                "end": 123,
                "properties": [
                  {
                    "type": "Property",
                    "start": 99,
                    "end": 121,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 103,
                      "decorators": [],
                      "name": "with",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 105,
                      "end": 121,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 107,
                          "end": 119,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 111,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 113,
                            "end": 119,
                            "raw": "\"json\"",
                            "value": "json"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "source": {
                "type": "Literal",
                "start": 82,
                "end": 95,
                "raw": "\"./data.json\"",
                "value": "./data.json"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
