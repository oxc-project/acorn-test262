file1.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 90,
        "end": 96,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 94,
            "end": 95,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 104,
        "end": 121,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 119,
          "end": 121,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 122,
      "end": 142,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 141,
        "raw": "'bar'",
        "value": "bar"
      }
    }
  ],
  "sourceType": "module"
}
```
file2.ts
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 25,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 22,
          "end": 23,
          "exported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 42,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 41,
          "exported": {
            "type": "Identifier",
            "start": 39,
            "end": 41,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 44,
      "end": 64,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 63,
        "raw": "'bar'",
        "value": "bar"
      }
    }
  ],
  "sourceType": "module"
}
```
file3.ts
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 27,
        "raw": "'a'",
        "value": "a"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 9,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 11,
          "end": 17,
          "exported": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 29,
      "end": 61,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 44,
        "end": 61,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 61,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 56,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 62,
      "end": 82,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 81,
        "raw": "'bar'",
        "value": "bar"
      }
    }
  ],
  "sourceType": "module"
}
```
file4.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 14,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 21,
        "end": 38,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 36,
          "end": 38,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 39,
      "end": 67,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 54,
        "end": 67,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 67,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": []
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 101,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 88,
          "end": 89,
          "exported": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 91,
          "end": 99,
          "exported": {
            "type": "Identifier",
            "start": 97,
            "end": 99,
            "decorators": [],
            "name": "z2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 91,
            "end": 93,
            "decorators": [],
            "name": "z1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 132,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 132,
        "raw": "'a'",
        "value": "a"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 111,
          "end": 112,
          "exported": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 114,
          "end": 122,
          "exported": {
            "type": "Identifier",
            "start": 120,
            "end": 122,
            "decorators": [],
            "name": "s2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 116,
            "decorators": [],
            "name": "s1",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
file5.ts
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 18,
      "end": 36,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 35,
        "raw": "'a'",
        "value": "a"
      }
    }
  ],
  "sourceType": "module"
}
```
