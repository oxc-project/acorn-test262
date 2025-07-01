__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "missing",
            "raw": "\"missing\"",
            "start": 150,
            "end": 159
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "importKind": "value",
          "start": 150,
          "end": 164
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "(missing)",
            "raw": "\"(missing)\"",
            "start": 168,
            "end": 179
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "importKind": "value",
          "start": 168,
          "end": 184
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 188,
            "end": 190
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "importKind": "value",
          "start": 188,
          "end": 195
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arbitraryModuleNamespaceIdentifiers_importEmpty",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_importEmpty\"",
        "start": 204,
        "end": 255
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 139,
      "end": 256
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 266
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 271
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 277
              }
            ],
            "start": 269,
            "end": 278
          },
          "definite": false,
          "start": 263,
          "end": 278
        }
      ],
      "declare": false,
      "start": 257,
      "end": 279
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 139,
  "end": 279
}
```
