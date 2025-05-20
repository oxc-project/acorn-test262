__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 42,
        "raw": "\"lit-element/lit-element.js\"",
        "value": "lit-element/lit-element.js"
      }
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
  "end": 33,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 32,
        "raw": "\"./lit-element.js\"",
        "value": "./lit-element.js"
      }
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 26,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 26,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "LitElement",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 60,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 59,
        "raw": "\"lit\"",
        "value": "lit"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 21,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 21,
            "end": 31,
            "decorators": [],
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "decorators": [],
            "name": "LitElement2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 104,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 68,
        "end": 104,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 102,
          "end": 104,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 82,
          "decorators": [],
          "name": "ElementB",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 91,
          "end": 101,
          "decorators": [],
          "name": "LitElement",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 149,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 112,
        "end": 149,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 147,
          "end": 149,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 126,
          "decorators": [],
          "name": "ElementC",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 135,
          "end": 146,
          "decorators": [],
          "name": "LitElement2",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
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
