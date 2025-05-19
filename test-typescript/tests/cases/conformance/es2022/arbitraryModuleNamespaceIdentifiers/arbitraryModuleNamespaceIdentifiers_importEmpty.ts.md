__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 139,
  "end": 279,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 139,
      "end": 256,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 204,
        "end": 255,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_importEmpty\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_importEmpty"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 150,
          "end": 164,
          "imported": {
            "type": "Literal",
            "start": 150,
            "end": 159,
            "raw": "\"missing\"",
            "value": "missing"
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 168,
          "end": 184,
          "imported": {
            "type": "Literal",
            "start": 168,
            "end": 179,
            "raw": "\"(missing)\"",
            "value": "(missing)"
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 188,
          "end": 195,
          "imported": {
            "type": "Literal",
            "start": 188,
            "end": 190,
            "raw": "\"\"",
            "value": ""
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 278,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 266,
            "decorators": [],
            "name": "xyz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 269,
            "end": 278,
            "elements": [
              {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ]
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
