__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 35,
        "end": 36
      },
      "exportKind": "value",
      "start": 20,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 38
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 41
      },
      "exportKind": "value",
      "start": 25,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./x.ts",
        "raw": "\"./x.ts\"",
        "start": 14,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "start": 31,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./y.tsx",
        "raw": "\"./y.tsx\"",
        "start": 38,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 24,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "start": 56,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./z.d.ts",
        "raw": "\"./z.d.ts\"",
        "start": 63,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 74
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 131
          },
          "start": 129,
          "end": 131
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./x",
        "raw": "\"./x\"",
        "start": 137,
        "end": 142
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 122,
      "end": 143
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "start": 151,
          "end": 153
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./y",
        "raw": "\"./y\"",
        "start": 159,
        "end": 164
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 144,
      "end": 165
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 175
          },
          "start": 173,
          "end": 175
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./z",
        "raw": "\"./z\"",
        "start": 181,
        "end": 186
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 166,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 187
}
```
