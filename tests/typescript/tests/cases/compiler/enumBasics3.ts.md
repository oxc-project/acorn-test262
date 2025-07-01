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
        "start": 7,
        "end": 8
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
                "start": 30,
                "end": 31
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
                        "start": 50,
                        "end": 52
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
                              "start": 61,
                              "end": 62
                            },
                            "initializer": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 65,
                              "end": 66
                            },
                            "computed": false,
                            "start": 61,
                            "end": 66
                          },
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 74,
                              "end": 75
                            },
                            "initializer": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 78,
                                "end": 79
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 80,
                                "end": 81
                              },
                              "optional": false,
                              "computed": false,
                              "start": 78,
                              "end": 81
                            },
                            "computed": false,
                            "start": 74,
                            "end": 81
                          }
                        ],
                        "start": 53,
                        "end": 104
                      },
                      "const": false,
                      "declare": false,
                      "start": 45,
                      "end": 104
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 38,
                    "end": 104
                  }
                ],
                "start": 32,
                "end": 108
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 20,
              "end": 108
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13,
            "end": 108
          }
        ],
        "start": 9,
        "end": 110
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 120
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
                "start": 142,
                "end": 143
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
                        "start": 162,
                        "end": 164
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
                              "start": 173,
                              "end": 174
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
                                    "start": 177,
                                    "end": 178
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "N",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 179,
                                    "end": 180
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 177,
                                  "end": 180
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 181,
                                  "end": 183
                                },
                                "optional": false,
                                "computed": false,
                                "start": 177,
                                "end": 183
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 184,
                                "end": 185
                              },
                              "optional": false,
                              "computed": false,
                              "start": 177,
                              "end": 185
                            },
                            "computed": false,
                            "start": 173,
                            "end": 185
                          },
                          {
                            "type": "TSEnumMember",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 194
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
                                      "start": 197,
                                      "end": 198
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "N",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 199,
                                      "end": 200
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 197,
                                    "end": 200
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 201,
                                    "end": 203
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 197,
                                  "end": 203
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 204,
                                  "end": 205
                                },
                                "optional": false,
                                "computed": false,
                                "start": 197,
                                "end": 205
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 206,
                                "end": 207
                              },
                              "optional": false,
                              "computed": false,
                              "start": 197,
                              "end": 207
                            },
                            "computed": false,
                            "start": 193,
                            "end": 207
                          }
                        ],
                        "start": 165,
                        "end": 230
                      },
                      "const": false,
                      "declare": false,
                      "start": 157,
                      "end": 230
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 150,
                    "end": 230
                  }
                ],
                "start": 144,
                "end": 234
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 132,
              "end": 234
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 125,
            "end": 234
          }
        ],
        "start": 121,
        "end": 236
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 112,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
