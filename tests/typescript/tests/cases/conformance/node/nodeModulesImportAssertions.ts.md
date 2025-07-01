__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 17,
        "end": 33
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 47
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 49,
            "end": 55
          },
          "start": 43,
          "end": 55
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./package.json",
        "raw": "\"./package.json\"",
        "start": 17,
        "end": 33
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 47
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 49,
            "end": 55
          },
          "start": 43,
          "end": 55
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "json2",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 129
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./package.json",
              "raw": "\"./package.json\"",
              "start": 139,
              "end": 155
            },
            "options": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 165
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 173
                        },
                        "value": {
                          "type": "Literal",
                          "value": "json",
                          "raw": "\"json\"",
                          "start": 175,
                          "end": 181
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 169,
                        "end": 181
                      }
                    ],
                    "start": 167,
                    "end": 183
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 159,
                  "end": 183
                }
              ],
              "start": 157,
              "end": 185
            },
            "phase": null,
            "start": 132,
            "end": 186
          },
          "definite": false,
          "start": 124,
          "end": 186
        }
      ],
      "declare": false,
      "start": 118,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
