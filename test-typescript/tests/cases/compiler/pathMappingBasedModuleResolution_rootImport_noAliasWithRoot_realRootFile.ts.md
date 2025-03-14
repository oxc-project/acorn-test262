/foo.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/root/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "\"/foo\"",
        "value": "/foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 54,
        "raw": "\"/bar\"",
        "value": "/bar"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 37,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
