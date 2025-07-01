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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 36
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BAR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 50
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 47,
                    "end": 50
                  }
                ],
                "start": 37,
                "end": 56
              },
              "const": false,
              "declare": false,
              "start": 25,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 56
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 79
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 95
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 103
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BAR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 107
                          },
                          "optional": false,
                          "computed": false,
                          "start": 97,
                          "end": 107
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 92,
                        "end": 107
                      }
                    ],
                    "start": 82,
                    "end": 113
                  },
                  "definite": false,
                  "start": 72,
                  "end": 113
                }
              ],
              "declare": false,
              "start": 68,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 61,
            "end": 114
          }
        ],
        "start": 12,
        "end": 116
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 154
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 168
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 165,
                    "end": 168
                  }
                ],
                "start": 155,
                "end": 174
              },
              "const": false,
              "declare": false,
              "start": 143,
              "end": 174
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 174
          },
          {
            "type": "EmptyStatement",
            "start": 174,
            "end": 175
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 198
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 214
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 222
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FOO",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 223,
                            "end": 226
                          },
                          "optional": false,
                          "computed": false,
                          "start": 216,
                          "end": 226
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 211,
                        "end": 226
                      }
                    ],
                    "start": 201,
                    "end": 232
                  },
                  "definite": false,
                  "start": 191,
                  "end": 232
                }
              ],
              "declare": false,
              "start": 187,
              "end": 233
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 180,
            "end": 233
          }
        ],
        "start": 130,
        "end": 235
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 118,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 247
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 265
                },
                "optional": false,
                "computed": false,
                "start": 256,
                "end": 265
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
                },
                "optional": false,
                "computed": false,
                "start": 271,
                "end": 280
              }
            ],
            "start": 250,
            "end": 282
          },
          "definite": false,
          "start": 241,
          "end": 282
        }
      ],
      "declare": false,
      "start": 237,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
