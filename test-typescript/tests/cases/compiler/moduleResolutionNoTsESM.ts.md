x.ts
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
        "raw": "0",
        "value": 0
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
y.tsx
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
        "raw": "0",
        "value": 0
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
z.d.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 25,
      "end": 42,
      "declaration": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
user.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"./x.ts\"",
        "value": "./x.ts"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 47,
        "raw": "\"./y.tsx\"",
        "value": "./y.tsx"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 31,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 74,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 73,
        "raw": "\"./z.d.ts\"",
        "value": "./z.d.ts"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 56,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 122,
      "end": 143,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 137,
        "end": 142,
        "raw": "\"./x\"",
        "value": "./x"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 129,
          "end": 131,
          "local": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "decorators": [],
            "name": "x2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 144,
      "end": 165,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 159,
        "end": 164,
        "raw": "\"./y\"",
        "value": "./y"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 151,
          "end": 153,
          "local": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "y2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 166,
      "end": 187,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 181,
        "end": 186,
        "raw": "\"./z\"",
        "value": "./z"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 173,
          "end": 175,
          "local": {
            "type": "Identifier",
            "start": 173,
            "end": 175,
            "decorators": [],
            "name": "z2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
