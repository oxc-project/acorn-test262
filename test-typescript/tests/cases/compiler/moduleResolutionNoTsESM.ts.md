__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 33,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 15,
      "end": 32,
      "declaration": {
        "type": "Literal",
        "start": 30,
        "end": 31,
        "value": 0,
        "raw": "0"
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
  "end": 18,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 16,
        "value": 0,
        "raw": "0"
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
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 25,
      "end": 42,
      "declaration": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 188,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "value": "./x.ts",
        "raw": "\"./x.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 48,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 31,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 47,
        "value": "./y.tsx",
        "raw": "\"./y.tsx\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 74,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 56,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 73,
        "value": "./z.d.ts",
        "raw": "\"./z.d.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 122,
      "end": 143,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 129,
          "end": 131,
          "local": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 137,
        "end": 142,
        "value": "./x",
        "raw": "\"./x\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 144,
      "end": 165,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 151,
          "end": 153,
          "local": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "name": "y2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 159,
        "end": 164,
        "value": "./y",
        "raw": "\"./y\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 166,
      "end": 187,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 173,
          "end": 175,
          "local": {
            "type": "Identifier",
            "start": 173,
            "end": 175,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 181,
        "end": 186,
        "value": "./z",
        "raw": "\"./z\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
