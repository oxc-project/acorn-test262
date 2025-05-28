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
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 42,
        "value": "lit-element/lit-element.js",
        "raw": "\"lit-element/lit-element.js\""
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
  "end": 33,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 33,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 32,
        "value": "./lit-element.js",
        "raw": "\"./lit-element.js\""
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 26,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 26,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "LitElement",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "decorators": [],
            "name": "LitElement2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 59,
        "value": "lit",
        "raw": "\"lit\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 104,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 68,
        "end": 104,
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
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 102,
          "end": 104,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 149,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 112,
        "end": 149,
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
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 147,
          "end": 149,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
