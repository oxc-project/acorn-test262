__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 27,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 68
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultBinding",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 93
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 94,
        "end": 111
      },
      "declare": false,
      "start": 69,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 134
          },
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 158
          },
          "start": 143,
          "end": 158
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 164,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 136,
      "end": 205
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 244
          },
          "init": {
            "type": "Literal",
            "value": "hello world",
            "raw": "\"hello world\"",
            "start": 247,
            "end": 260
          },
          "definite": false,
          "start": 229,
          "end": 260
        }
      ],
      "declare": false,
      "start": 225,
      "end": 261
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 285
          },
          "start": 270,
          "end": 285
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 291,
        "end": 331
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 263,
      "end": 332
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 374
          },
          "start": 359,
          "end": 374
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 380,
        "end": 420
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 352,
      "end": 421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 440
}
```
