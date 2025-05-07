__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 58,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 43,
          "end": 55,
          "key": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 49,
            "end": 55,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 33,
        "raw": "\"./package.json\"",
        "value": "./package.json",
        "regex": null,
        "bigint": null
      },
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
      ]
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
  "end": 205,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 58,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 43,
          "end": 55,
          "key": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 49,
            "end": 55,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 33,
        "raw": "\"./package.json\"",
        "value": "./package.json",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 129,
            "decorators": [],
            "name": "json2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 132,
            "end": 186,
            "options": {
              "type": "ObjectExpression",
              "start": 157,
              "end": 185,
              "properties": [
                {
                  "type": "Property",
                  "start": 159,
                  "end": 183,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 165,
                    "decorators": [],
                    "name": "assert",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 167,
                    "end": 183,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 169,
                        "end": 181,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 173,
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
                          "start": 175,
                          "end": 181,
                          "raw": "\"json\"",
                          "value": "json",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "source": {
              "type": "Literal",
              "start": 139,
              "end": 155,
              "raw": "\"./package.json\"",
              "value": "./package.json",
              "regex": null,
              "bigint": null
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
