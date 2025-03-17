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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "name": "data1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 31,
        "value": "./data.json",
        "raw": "\"./data.json\""
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 39,
          "end": 51,
          "key": {
            "type": "Identifier",
            "start": 39,
            "end": 43,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 45,
            "end": 51,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 66,
            "name": "data2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 69,
            "end": 124,
            "argument": {
              "type": "ImportExpression",
              "start": 75,
              "end": 124,
              "source": {
                "type": "Literal",
                "start": 82,
                "end": 95,
                "value": "./data.json",
                "raw": "\"./data.json\""
              },
              "options": {
                "type": "ObjectExpression",
                "start": 97,
                "end": 123,
                "properties": [
                  {
                    "type": "Property",
                    "start": 99,
                    "end": 121,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 103,
                      "name": "with",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 105,
                      "end": 121,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 107,
                          "end": 119,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 111,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 113,
                            "end": 119,
                            "value": "json",
                            "raw": "\"json\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
