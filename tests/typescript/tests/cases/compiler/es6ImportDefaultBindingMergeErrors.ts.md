__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
  "end": 440,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 68,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 21,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 67,
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 93,
        "decorators": [],
        "name": "defaultBinding",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 111,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 120,
            "end": 134,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 136,
      "end": 205,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 143,
          "end": 158,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 158,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 164,
        "end": 204,
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 261,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 244,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 247,
            "end": 260,
            "value": "hello world",
            "raw": "\"hello world\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 263,
      "end": 332,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 270,
          "end": 285,
          "local": {
            "type": "Identifier",
            "start": 270,
            "end": 285,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 291,
        "end": 331,
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 352,
      "end": 421,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 359,
          "end": 374,
          "local": {
            "type": "Identifier",
            "start": 359,
            "end": 374,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 380,
        "end": 420,
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\""
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
