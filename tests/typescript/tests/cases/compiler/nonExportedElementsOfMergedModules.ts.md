__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 74,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 17,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 24,
              "end": 29,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 26,
                  "end": 27,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 34,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 43,
              "end": 72,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 53,
                  "end": 66,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 60,
                    "end": 66,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 64,
                        "end": 65,
                        "id": {
                          "type": "Identifier",
                          "start": 64,
                          "end": 65,
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
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 76,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 87,
        "end": 168,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 93,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 100,
              "end": 105,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 102,
                  "end": 103,
                  "id": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 110,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 119,
              "end": 148,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 129,
                  "end": 142,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 136,
                    "end": 142,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 140,
                        "end": 141,
                        "id": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
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
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 157,
            "expression": {
              "type": "MemberExpression",
              "start": 153,
              "end": 156,
              "object": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 162,
            "end": 166,
            "expression": {
              "type": "MemberExpression",
              "start": 162,
              "end": 165,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
