__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 116,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 56,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 25,
              "end": 56,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "name": "MyEnum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 47,
                  "end": 50,
                  "id": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 50,
                    "name": "BAR",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 37,
                "end": 56,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 47,
                    "end": 50,
                    "id": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "name": "BAR",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 61,
            "end": 114,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 68,
              "end": 114,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 72,
                  "end": 113,
                  "id": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "name": "object2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 82,
                    "end": 113,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 92,
                        "end": 107,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 95,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 97,
                          "end": 107,
                          "object": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 103,
                            "name": "MyEnum",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 107,
                            "name": "BAR",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
      "type": "TSModuleDeclaration",
      "start": 118,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 235,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 174,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 143,
              "end": 174,
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 154,
                "name": "MyEnum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 165,
                  "end": 168,
                  "id": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "name": "FOO",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 155,
                "end": 174,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 165,
                    "end": 168,
                    "id": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 168,
                      "name": "FOO",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "EmptyStatement",
            "start": 174,
            "end": 175
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 180,
            "end": 233,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 187,
              "end": 233,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 232,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 198,
                    "name": "object1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 201,
                    "end": 232,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 211,
                        "end": 226,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 216,
                          "end": 226,
                          "object": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 222,
                            "name": "MyEnum",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 226,
                            "name": "FOO",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
      "type": "VariableDeclaration",
      "start": 237,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 247,
            "name": "broken",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 250,
            "end": 282,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 256,
                "end": 265,
                "object": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "name": "object1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 271,
                "end": 280,
                "object": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "name": "object2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
