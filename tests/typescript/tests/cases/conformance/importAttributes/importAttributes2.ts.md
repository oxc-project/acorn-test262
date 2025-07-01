__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 13,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 37,
              "end": 38
            },
            "definite": false,
            "start": 33,
            "end": 38
          }
        ],
        "declare": false,
        "start": 27,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 15,
        "end": 20
      },
      "exportKind": "value",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 34,
            "end": 40
          },
          "start": 28,
          "end": 40
        }
      ],
      "start": 0,
      "end": 42
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "exportKind": "value",
          "start": 52,
          "end": 53
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "exportKind": "value",
          "start": 55,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 64,
        "end": 69
      },
      "exportKind": "value",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 81
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 83,
            "end": 89
          },
          "start": 77,
          "end": 89
        }
      ],
      "start": 43,
      "end": 91
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 106,
        "end": 111
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 123
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 125,
            "end": 131
          },
          "start": 119,
          "end": 131
        }
      ],
      "exportKind": "value",
      "start": 92,
      "end": 133
    },
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 154,
        "end": 159
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 171
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 173,
            "end": 179
          },
          "start": 167,
          "end": 179
        }
      ],
      "exportKind": "value",
      "start": 134,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 182
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "exportKind": "value",
          "start": 12,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 21,
        "end": 26
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "exportKind": "value",
          "start": 44,
          "end": 50
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "exportKind": "value",
          "start": 52,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0",
        "raw": "'./0'",
        "start": 66,
        "end": 71
      },
      "exportKind": "value",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "value": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 82,
            "end": 85
          },
          "start": 79,
          "end": 85
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "value": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 90,
            "end": 93
          },
          "start": 87,
          "end": 93
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "value": {
            "type": "Literal",
            "value": "c",
            "raw": "\"c\"",
            "start": 98,
            "end": 101
          },
          "start": 95,
          "end": 101
        }
      ],
      "start": 35,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
