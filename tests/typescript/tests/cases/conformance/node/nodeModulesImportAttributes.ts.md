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
            "start": 41,
            "end": 45
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 47,
            "end": 53
          },
          "start": 41,
          "end": 53
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
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
            "start": 41,
            "end": 45
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 47,
            "end": 53
          },
          "start": 41,
          "end": 53
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 56
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
            "start": 122,
            "end": 127
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./package.json",
              "raw": "\"./package.json\"",
              "start": 137,
              "end": 153
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
                    "name": "with",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 161
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
                          "start": 165,
                          "end": 169
                        },
                        "value": {
                          "type": "Literal",
                          "value": "json",
                          "raw": "\"json\"",
                          "start": 171,
                          "end": 177
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 165,
                        "end": 177
                      }
                    ],
                    "start": 163,
                    "end": 179
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 157,
                  "end": 179
                }
              ],
              "start": 155,
              "end": 181
            },
            "phase": null,
            "start": 130,
            "end": 182
          },
          "definite": false,
          "start": 122,
          "end": 182
        }
      ],
      "declare": false,
      "start": 116,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 201
}
```
