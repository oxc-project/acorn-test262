__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 197,
  "end": 422,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 197,
      "end": 223,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 204,
        "end": 222,
        "value": "unaliasedModule1",
        "raw": "\"unaliasedModule1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 225,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 237,
        "end": 262,
        "expression": {
          "type": "Literal",
          "start": 245,
          "end": 261,
          "value": "aliasedModule1",
          "raw": "\"aliasedModule1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 267,
      "expression": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 269,
      "end": 311,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 277,
          "end": 279,
          "imported": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 281,
          "end": 283,
          "imported": {
            "type": "Identifier",
            "start": 281,
            "end": 283,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 281,
            "end": 283,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 285,
          "end": 287,
          "imported": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 294,
        "end": 310,
        "value": "aliasedModule2",
        "raw": "\"aliasedModule2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 315,
      "expression": {
        "type": "Identifier",
        "start": 312,
        "end": 314,
        "decorators": [],
        "name": "p1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 317,
      "end": 348,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 324,
          "end": 325,
          "local": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 331,
        "end": 347,
        "value": "aliasedModule3",
        "raw": "\"aliasedModule3\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 351,
      "expression": {
        "type": "Identifier",
        "start": 349,
        "end": 350,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 353,
      "end": 390,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 360,
          "end": 367,
          "local": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 373,
        "end": 389,
        "value": "aliasedModule4",
        "raw": "\"aliasedModule4\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 391,
      "end": 394,
      "expression": {
        "type": "Identifier",
        "start": 391,
        "end": 393,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 396,
      "end": 422,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 403,
        "end": 421,
        "value": "unaliasedModule2",
        "raw": "\"unaliasedModule2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
