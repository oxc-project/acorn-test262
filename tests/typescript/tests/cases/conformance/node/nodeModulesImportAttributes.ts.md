__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 56,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 33,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 41,
          "end": 53,
          "key": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 47,
            "end": 53,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
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
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 56,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 33,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 41,
          "end": 53,
          "key": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 47,
            "end": 53,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 183,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "decorators": [],
            "name": "json2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 130,
            "end": 182,
            "source": {
              "type": "Literal",
              "start": 137,
              "end": 153,
              "value": "./package.json",
              "raw": "\"./package.json\""
            },
            "options": {
              "type": "ObjectExpression",
              "start": 155,
              "end": 181,
              "properties": [
                {
                  "type": "Property",
                  "start": 157,
                  "end": 179,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 161,
                    "decorators": [],
                    "name": "with",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 163,
                    "end": 179,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 165,
                        "end": 177,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 169,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 171,
                          "end": 177,
                          "value": "json",
                          "raw": "\"json\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "phase": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
