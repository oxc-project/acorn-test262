__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 143,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 96,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 90,
        "end": 96,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 94,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 121,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 104,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 119,
          "end": 121,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 122,
      "end": 142,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 141,
        "value": "bar",
        "raw": "'bar'"
      },
      "attributes": [],
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
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 13,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 25,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 22,
          "end": 23,
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 42,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 41,
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 39,
            "end": 41,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 44,
      "end": 64,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 63,
        "value": "bar",
        "raw": "'bar'"
      },
      "attributes": [],
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
  "end": 83,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 11,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 27,
        "value": "a",
        "raw": "'a'"
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 29,
      "end": 61,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 44,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 56,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 61,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 62,
      "end": 82,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 81,
        "value": "bar",
        "raw": "'bar'"
      },
      "attributes": [],
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
  "end": 133,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 13,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 38,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 21,
        "end": 38,
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 36,
          "end": 38,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 39,
      "end": 67,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 54,
        "end": 67,
        "id": null,
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 67,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 79,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 101,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 88,
          "end": 89,
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 91,
          "end": 99,
          "local": {
            "type": "Identifier",
            "start": 91,
            "end": 93,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 97,
            "end": 99,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 132,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 111,
          "end": 112,
          "local": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 114,
          "end": 122,
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 116,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 120,
            "end": 122,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 132,
        "value": "a",
        "raw": "'a'"
      },
      "exportKind": "value",
      "attributes": []
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
  "end": 36,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportAllDeclaration",
      "start": 18,
      "end": 36,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 35,
        "value": "a",
        "raw": "'a'"
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
