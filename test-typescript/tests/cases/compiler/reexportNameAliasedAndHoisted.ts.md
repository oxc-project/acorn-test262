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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "name": "Sizing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 21,
          "end": 24
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 53,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 45,
              "name": "Sizing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 48,
              "end": 52,
              "value": null,
              "raw": "null"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 89,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "name": "Sizing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 89,
            "name": "GridViewSizing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 97,
        "end": 109,
        "value": "./gridview",
        "raw": "'./gridview'"
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 192,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 118,
        "end": 192,
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 134,
          "name": "Sizing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 135,
          "end": 192,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 141,
              "end": 190,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 148,
                "end": 190,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 154,
                    "end": 189,
                    "id": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 164,
                      "name": "Distribute",
                      "typeAnnotation": null,
                      "decorators": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 173,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 175,
                            "end": 187,
                            "value": "distribute",
                            "raw": "'distribute'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
