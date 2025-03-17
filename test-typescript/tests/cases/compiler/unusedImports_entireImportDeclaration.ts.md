__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 40,
      "end": 57,
      "declaration": {
        "type": "Literal",
        "start": 55,
        "end": 56,
        "raw": "0",
        "value": 0
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
  "end": 197,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 42,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 13,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 22,
          "end": 29,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 74,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 73,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 51,
          "end": 53,
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 53,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 55,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 76,
      "end": 119,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 113,
        "end": 118,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 83,
          "end": 85,
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 89,
          "end": 96,
          "imported": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 98,
          "end": 105,
          "imported": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 123,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 120,
        "end": 122,
        "decorators": [],
        "name": "d3",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 124,
      "end": 155,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 154,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 131,
          "end": 133,
          "local": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 135,
          "end": 143,
          "local": {
            "type": "Identifier",
            "start": 140,
            "end": 143,
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 159,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "decorators": [],
        "name": "d4",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 160,
      "end": 191,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 185,
        "end": 190,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 167,
          "end": 169,
          "local": {
            "type": "Identifier",
            "start": 167,
            "end": 169,
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 171,
          "end": 179,
          "local": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
            "decorators": [],
            "name": "ns3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 192,
        "end": 195,
        "decorators": [],
        "name": "ns3",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
