/node_modules/foo/index.d.ts
```json
{
  "type": "Program",
  "start": 100,
  "end": 122,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 120,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 120,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 117,
                "end": 120
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
/node_modules/foo/node_modules/alpha/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
/node_modules/bar/index.d.ts
```json
{
  "type": "Program",
  "start": 32,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 52,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 52,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 49,
                "end": 52
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
/node_modules/bar/node_modules/alpha/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
/src/root.ts
```json
{
  "type": "Program",
  "start": 60,
  "end": 60,
  "body": [],
  "sourceType": "module"
}
```
