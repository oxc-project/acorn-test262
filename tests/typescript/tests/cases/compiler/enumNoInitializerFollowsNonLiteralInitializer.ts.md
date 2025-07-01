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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 19,
              "end": 20
            },
            "definite": false,
            "start": 13,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./helpers",
        "raw": "\"./helpers\"",
        "start": 20,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "computed": false,
            "start": 46,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": null,
            "computed": false,
            "start": 59,
            "end": 60
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 70,
              "end": 72
            },
            "computed": false,
            "start": 66,
            "end": 72
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "initializer": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "start": 82,
                  "end": 86
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 97,
                  "end": 103
                },
                "start": 82,
                "end": 103
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 107,
                "end": 110
              },
              "start": 82,
              "end": 110
            },
            "computed": false,
            "start": 78,
            "end": 110
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "initializer": null,
            "computed": false,
            "start": 116,
            "end": 117
          }
        ],
        "start": 40,
        "end": 120
      },
      "const": false,
      "declare": false,
      "start": 33,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 121
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./helpers",
        "raw": "\"./helpers\"",
        "start": 20,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "computed": false,
            "start": 46,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 63,
              "end": 64
            },
            "computed": false,
            "start": 59,
            "end": 64
          }
        ],
        "start": 40,
        "end": 67
      },
      "const": false,
      "declare": false,
      "start": 33,
      "end": 67
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 85,
                "end": 86
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 89,
                "end": 90
              },
              "start": 85,
              "end": 90
            },
            "computed": false,
            "start": 81,
            "end": 90
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "initializer": null,
            "computed": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 75,
        "end": 100
      },
      "const": false,
      "declare": false,
      "start": 68,
      "end": 100
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 119,
                "end": 120
              },
              "prefix": true,
              "start": 118,
              "end": 120
            },
            "computed": false,
            "start": 114,
            "end": 120
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "initializer": null,
            "computed": false,
            "start": 126,
            "end": 127
          }
        ],
        "start": 108,
        "end": 130
      },
      "const": false,
      "declare": false,
      "start": 101,
      "end": 130
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 149,
              "end": 150
            },
            "computed": false,
            "start": 144,
            "end": 151
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "initializer": null,
            "computed": false,
            "start": 157,
            "end": 158
          }
        ],
        "start": 138,
        "end": 161
      },
      "const": false,
      "declare": false,
      "start": 131,
      "end": 161
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 168
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "initializer": null,
            "computed": false,
            "start": 175,
            "end": 176
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "initializer": null,
            "computed": false,
            "start": 182,
            "end": 183
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "computed": false,
            "start": 189,
            "end": 194
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "initializer": null,
            "computed": false,
            "start": 200,
            "end": 201
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 216
              },
              "start": 211,
              "end": 216
            },
            "computed": false,
            "start": 207,
            "end": 216
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "initializer": null,
            "computed": false,
            "start": 222,
            "end": 223
          }
        ],
        "start": 169,
        "end": 226
      },
      "const": false,
      "declare": false,
      "start": 162,
      "end": 226
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 226
}
```
