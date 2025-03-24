__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 96,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 95,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 77,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 85,
        "end": 94,
        "value": "./other",
        "raw": "\"./other\""
      },
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
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "value": "./other",
        "raw": "\"./other\""
      },
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
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 17,
        "properties": []
      },
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
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "tslib",
        "raw": "\"tslib\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 70,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 29,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 53,
              "name": "__importDefault",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "name": "m",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 57,
                    "end": 60
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 67,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 63,
                "end": 67
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
