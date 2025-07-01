__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "__a",
              "raw": "\"__a\"",
              "start": 15,
              "end": 20
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "start": 15,
            "end": 24
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "(Anonymous function)",
              "raw": "\"(Anonymous function)\"",
              "start": 30,
              "end": 52
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 55,
              "end": 56
            },
            "computed": false,
            "start": 30,
            "end": 56
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "(Anonymous class)",
              "raw": "\"(Anonymous class)\"",
              "start": 62,
              "end": 81
            },
            "initializer": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 84,
              "end": 85
            },
            "computed": false,
            "start": 62,
            "end": 85
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "__call",
              "raw": "\"__call\"",
              "start": 91,
              "end": 99
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 102,
              "end": 104
            },
            "computed": false,
            "start": 91,
            "end": 104
          }
        ],
        "start": 9,
        "end": 106
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 106
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "___call",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 150
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 154,
                  "end": 160
                },
                "start": 152,
                "end": 160
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 178,
                      "end": 179
                    },
                    "start": 171,
                    "end": 180
                  }
                ],
                "start": 161,
                "end": 186
              },
              "expression": false,
              "start": 134,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 127,
            "end": 186
          }
        ],
        "start": 121,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 107,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "no",
              "raw": "\"no\"",
              "start": 217,
              "end": 221
            },
            "start": 210,
            "end": 222
          }
        ],
        "start": 204,
        "end": 224
      },
      "expression": false,
      "start": 189,
      "end": 224
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 238
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "__call",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 267
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 271,
                      "end": 277
                    },
                    "start": 269,
                    "end": 277
                  },
                  "start": 268,
                  "end": 277
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 280,
                  "end": 286
                },
                "start": 278,
                "end": 286
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 304,
                      "end": 305
                    },
                    "start": 297,
                    "end": 306
                  }
                ],
                "start": 287,
                "end": 312
              },
              "expression": false,
              "start": 252,
              "end": 312
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 245,
            "end": 312
          }
        ],
        "start": 239,
        "end": 314
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 225,
      "end": 314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 314
}
```
