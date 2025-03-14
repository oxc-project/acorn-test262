__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 25,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "decorators": [],
          "name": "Sizing",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 21,
          "end": 24
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 52,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 45,
              "decorators": [],
              "name": "Sizing",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 48,
              "end": 52,
              "raw": "null",
              "value": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 56,
  "end": 192,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 110,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 97,
        "end": 109,
        "raw": "'./gridview'",
        "value": "./gridview"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 89,
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 89,
            "decorators": [],
            "name": "GridViewSizing",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "decorators": [],
            "name": "Sizing",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 192,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 118,
        "end": 192,
        "body": {
          "type": "TSModuleBlock",
          "start": 135,
          "end": 192,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 141,
              "end": 190,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 148,
                "end": 190,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 154,
                    "end": 189,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 164,
                      "decorators": [],
                      "name": "Distribute",
                      "optional": false
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 167,
                      "end": 189,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 169,
                          "end": 187,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 173,
                            "decorators": [],
                            "name": "type",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 175,
                            "end": 187,
                            "raw": "'distribute'",
                            "value": "distribute"
                          }
                        }
                      ]
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 134,
          "decorators": [],
          "name": "Sizing",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
