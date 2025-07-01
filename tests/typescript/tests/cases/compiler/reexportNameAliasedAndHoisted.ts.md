__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Sizing",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 21,
          "end": 24
        },
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 25
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sizing",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 45
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 48,
              "end": 52
            },
            "definite": false,
            "start": 39,
            "end": 52
          }
        ],
        "declare": false,
        "start": 33,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sizing",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 71
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "GridViewSizing",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 89
          },
          "exportKind": "value",
          "start": 65,
          "end": 89
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./gridview",
        "raw": "'./gridview'",
        "start": 97,
        "end": 109
      },
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 110
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Sizing",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 134
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Distribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 164
                    },
                    "init": {
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
                            "value": "distribute",
                            "raw": "'distribute'",
                            "start": 175,
                            "end": 187
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 169,
                          "end": 187
                        }
                      ],
                      "start": 167,
                      "end": 189
                    },
                    "definite": false,
                    "start": 154,
                    "end": 189
                  }
                ],
                "declare": false,
                "start": 148,
                "end": 190
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 141,
              "end": 190
            }
          ],
          "start": 135,
          "end": 192
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 118,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 192
}
```
