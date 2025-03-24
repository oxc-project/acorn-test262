__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 314,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 15,
          "end": 24,
          "id": {
            "type": "Literal",
            "start": 15,
            "end": 20,
            "value": "__a",
            "raw": "\"__a\""
          },
          "initializer": {
            "type": "Literal",
            "start": 23,
            "end": 24,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 30,
          "end": 56,
          "id": {
            "type": "Literal",
            "start": 30,
            "end": 52,
            "value": "(Anonymous function)",
            "raw": "\"(Anonymous function)\""
          },
          "initializer": {
            "type": "Literal",
            "start": 55,
            "end": 56,
            "value": 2,
            "raw": "2"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 62,
          "end": 85,
          "id": {
            "type": "Literal",
            "start": 62,
            "end": 81,
            "value": "(Anonymous class)",
            "raw": "\"(Anonymous class)\""
          },
          "initializer": {
            "type": "Literal",
            "start": 84,
            "end": 85,
            "value": 4,
            "raw": "4"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 91,
          "end": 104,
          "id": {
            "type": "Literal",
            "start": 91,
            "end": 99,
            "value": "__call",
            "raw": "\"__call\""
          },
          "initializer": {
            "type": "Literal",
            "start": 102,
            "end": 104,
            "value": 10,
            "raw": "10"
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 106,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 24,
            "id": {
              "type": "Literal",
              "start": 15,
              "end": 20,
              "value": "__a",
              "raw": "\"__a\""
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 56,
            "id": {
              "type": "Literal",
              "start": 30,
              "end": 52,
              "value": "(Anonymous function)",
              "raw": "\"(Anonymous function)\""
            },
            "initializer": {
              "type": "Literal",
              "start": 55,
              "end": 56,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 85,
            "id": {
              "type": "Literal",
              "start": 62,
              "end": 81,
              "value": "(Anonymous class)",
              "raw": "\"(Anonymous class)\""
            },
            "initializer": {
              "type": "Literal",
              "start": 84,
              "end": 85,
              "value": 4,
              "raw": "4"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 104,
            "id": {
              "type": "Literal",
              "start": 91,
              "end": 99,
              "value": "__call",
              "raw": "\"__call\""
            },
            "initializer": {
              "type": "Literal",
              "start": 102,
              "end": 104,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 107,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 121,
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 127,
            "end": 186,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 134,
              "end": 186,
              "id": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "name": "___call",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 186,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 171,
                    "end": 180,
                    "argument": {
                      "type": "Literal",
                      "start": 178,
                      "end": 179,
                      "value": 5,
                      "raw": "5"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 152,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 154,
                  "end": 160
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 224,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 210,
            "end": 222,
            "argument": {
              "type": "Literal",
              "start": 217,
              "end": 221,
              "value": "no",
              "raw": "\"no\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 238,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 239,
        "end": 314,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 245,
            "end": 312,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 252,
              "end": 312,
              "id": {
                "type": "Identifier",
                "start": 261,
                "end": 267,
                "name": "__call",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 277,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 277,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 271,
                      "end": 277
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 287,
                "end": 312,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 297,
                    "end": 306,
                    "argument": {
                      "type": "Literal",
                      "start": 304,
                      "end": 305,
                      "value": 5,
                      "raw": "5"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 278,
                "end": 286,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 280,
                  "end": 286
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
