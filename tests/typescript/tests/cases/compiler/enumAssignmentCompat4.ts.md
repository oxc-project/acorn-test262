__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "BAR",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 61,
            "end": 114,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 68,
              "end": 114,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 72,
                  "end": 113,
                  "id": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "decorators": [],
                    "name": "object2",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 95,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 97,
                          "end": 107,
                          "object": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 103,
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 107,
                            "decorators": [],
                            "name": "BAR",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
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
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "FOO",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 191,
                  "end": 232,
                  "id": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 198,
                    "decorators": [],
                    "name": "object1",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 216,
                          "end": 226,
                          "object": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 222,
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 226,
                            "decorators": [],
                            "name": "FOO",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
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
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 283,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 247,
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "decorators": [],
                  "name": "object1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 271,
                "end": 280,
                "object": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 272,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "decorators": [],
                  "name": "object2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
