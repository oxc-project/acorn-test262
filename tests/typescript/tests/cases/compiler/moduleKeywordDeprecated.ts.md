__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notok",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 22,
        "end": 25
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 9,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "not",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 36
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 39
        },
        "start": 33,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 40,
        "end": 43
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 26,
      "end": 43
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 62
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 63,
        "end": 66
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 44,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "also",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 86
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "start": 82,
        "end": 90
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 91,
        "end": 94
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 67,
      "end": 94
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "good",
        "raw": "\"good\"",
        "start": 142,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 149,
        "end": 152
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 127,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 9,
  "end": 153
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 19,
        "end": 22
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 41
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 45
        },
        "start": 38,
        "end": 45
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 46,
        "end": 49
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "alsogood",
        "raw": "\"alsogood\"",
        "start": 97,
        "end": 107
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 108,
        "end": 111
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 82,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exported",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 135
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 136,
          "end": 139
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 120,
        "end": 139
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 139
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "exported",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 162
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "sub",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 166
          },
          "start": 154,
          "end": 166
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 167,
          "end": 170
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 147,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
