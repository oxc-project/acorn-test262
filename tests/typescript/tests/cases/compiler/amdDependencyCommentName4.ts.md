__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "unaliasedModule1",
        "raw": "\"unaliasedModule1\"",
        "start": 204,
        "end": 222
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 197,
      "end": 223
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "aliasedModule1",
          "raw": "\"aliasedModule1\"",
          "start": 245,
          "end": 261
        },
        "start": 237,
        "end": 262
      },
      "importKind": "value",
      "start": 225,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
      },
      "directive": null,
      "start": 264,
      "end": 267
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "importKind": "value",
          "start": 277,
          "end": 279
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 283
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 283
          },
          "importKind": "value",
          "start": 281,
          "end": 283
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 287
          },
          "importKind": "value",
          "start": 285,
          "end": 287
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aliasedModule2",
        "raw": "\"aliasedModule2\"",
        "start": 294,
        "end": 310
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 269,
      "end": 311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "p1",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 314
      },
      "directive": null,
      "start": 312,
      "end": 315
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "start": 324,
          "end": 325
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aliasedModule3",
        "raw": "\"aliasedModule3\"",
        "start": 331,
        "end": 347
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 317,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 350
      },
      "directive": null,
      "start": 349,
      "end": 351
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 367
          },
          "start": 360,
          "end": 367
        }
      ],
      "source": {
        "type": "Literal",
        "value": "aliasedModule4",
        "raw": "\"aliasedModule4\"",
        "start": 373,
        "end": 389
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 353,
      "end": 390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 393
      },
      "directive": null,
      "start": 391,
      "end": 394
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "unaliasedModule2",
        "raw": "\"unaliasedModule2\"",
        "start": 403,
        "end": 421
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 396,
      "end": 422
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 197,
  "end": 422
}
```
