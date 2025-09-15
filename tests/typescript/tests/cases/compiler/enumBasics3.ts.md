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
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
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
                        "name": "E1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 55
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
                              "start": 64,
                              "end": 65
                            },
                            "initializer": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 68,
                              "end": 69
                            },
                            "computed": false,
                            "start": 64,
                            "end": 69
                          },
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 77,
                              "end": 78
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 81,
                                "end": 82
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 83,
                                "end": 84
                              },
                              "optional": false,
                              "computed": false,
                              "start": 81,
                              "end": 84
                            },
                            "computed": false,
                            "start": 77,
                            "end": 84
                          }
                        ],
                        "start": 56,
                        "end": 107
                      },
                      "const": false,
                      "declare": false,
                      "start": 48,
                      "end": 107
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 41,
                    "end": 107
                  }
                ],
                "start": 35,
                "end": 111
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 111
          }
        ],
        "start": 12,
        "end": 113
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 113
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
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
                        "name": "E2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 170
                      },
                      "body": {
                        "type": "TSEnumBody",
                        "members": [
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 180
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "M",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 183,
                                    "end": 184
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "N",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 185,
                                    "end": 186
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 183,
                                  "end": 186
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 187,
                                  "end": 189
                                },
                                "optional": false,
                                "computed": false,
                                "start": 183,
                                "end": 189
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 190,
                                "end": 191
                              },
                              "optional": false,
                              "computed": false,
                              "start": 183,
                              "end": 191
                            },
                            "computed": false,
                            "start": 179,
                            "end": 191
                          },
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 199,
                              "end": 200
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "M",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 203,
                                      "end": 204
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "N",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 205,
                                      "end": 206
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 203,
                                    "end": 206
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 207,
                                    "end": 209
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 203,
                                  "end": 209
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 210,
                                  "end": 211
                                },
                                "optional": false,
                                "computed": false,
                                "start": 203,
                                "end": 211
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 212,
                                "end": 213
                              },
                              "optional": false,
                              "computed": false,
                              "start": 203,
                              "end": 213
                            },
                            "computed": false,
                            "start": 199,
                            "end": 213
                          }
                        ],
                        "start": 171,
                        "end": 236
                      },
                      "const": false,
                      "declare": false,
                      "start": 163,
                      "end": 236
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 156,
                    "end": 236
                  }
                ],
                "start": 150,
                "end": 240
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 138,
              "end": 240
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 131,
            "end": 240
          }
        ],
        "start": 127,
        "end": 242
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 115,
      "end": 242
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 242
}
```
