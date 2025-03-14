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
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 106,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 24,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 15,
              "end": 20,
              "raw": "\"__a\"",
              "value": "__a"
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 56,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 30,
              "end": 52,
              "raw": "\"(Anonymous function)\"",
              "value": "(Anonymous function)"
            },
            "initializer": {
              "type": "Literal",
              "start": 55,
              "end": 56,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 85,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 62,
              "end": 81,
              "raw": "\"(Anonymous class)\"",
              "value": "(Anonymous class)"
            },
            "initializer": {
              "type": "Literal",
              "start": 84,
              "end": 85,
              "raw": "4",
              "value": 4
            }
          },
          {
            "type": "TSEnumMember",
            "start": 91,
            "end": 104,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 91,
              "end": 99,
              "raw": "\"__call\"",
              "value": "__call"
            },
            "initializer": {
              "type": "Literal",
              "start": 102,
              "end": 104,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 107,
      "end": 188,
      "body": {
        "type": "TSModuleBlock",
        "start": 121,
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 127,
            "end": 186,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 134,
              "end": 186,
              "async": false,
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
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "decorators": [],
                "name": "___call",
                "optional": false
              },
              "params": [],
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 224,
      "async": false,
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
              "raw": "\"no\"",
              "value": "no"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 314,
      "body": {
        "type": "TSModuleBlock",
        "start": 239,
        "end": 314,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 245,
            "end": 312,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 252,
              "end": 312,
              "async": false,
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
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 261,
                "end": 267,
                "decorators": [],
                "name": "__call",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 277,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 277,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 271,
                      "end": 277
                    }
                  }
                }
              ],
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 238,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
