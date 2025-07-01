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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 31,
                "end": 38
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 38
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "weekday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 74
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 67,
                    "end": 74
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "weekend",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 91
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 84,
                    "end": 91
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "holiday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 108
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 101,
                    "end": 108
                  }
                ],
                "start": 57,
                "end": 114
              },
              "const": false,
              "declare": false,
              "start": 50,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 114
          }
        ],
        "start": 10,
        "end": 116
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 127
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 129,
                            "end": 131
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 132,
                            "end": 133
                          },
                          "start": 129,
                          "end": 133
                        },
                        "typeArguments": null,
                        "start": 129,
                        "end": 133
                      },
                      "start": 127,
                      "end": 133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 126,
                    "end": 134
                  }
                ],
                "start": 124,
                "end": 136
              },
              "start": 122,
              "end": 136
            },
            "start": 121,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 136
        }
      ],
      "declare": false,
      "start": 117,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 157
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 159
                  },
                  "optional": false,
                  "computed": false,
                  "start": 155,
                  "end": 159
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 152,
                "end": 159
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 167
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 165,
                "end": 171
              }
            ],
            "start": 146,
            "end": 173
          },
          "definite": false,
          "start": 142,
          "end": 173
        }
      ],
      "declare": false,
      "start": 138,
      "end": 174
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 180
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
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 187
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 185,
                "end": 191
              }
            ],
            "start": 183,
            "end": 193
          },
          "definite": false,
          "start": 179,
          "end": 193
        }
      ],
      "declare": false,
      "start": 175,
      "end": 194
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 217
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 221
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 214,
                      "end": 221
                    }
                  ],
                  "start": 212,
                  "end": 223
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 223
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 231
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 237
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 241
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 243
                        },
                        "optional": false,
                        "computed": false,
                        "start": 239,
                        "end": 243
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 235,
                      "end": 243
                    }
                  ],
                  "start": 233,
                  "end": 245
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 229,
                "end": 245
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 253
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "en",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 259
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 261,
                          "end": 263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 264,
                          "end": 265
                        },
                        "optional": false,
                        "computed": false,
                        "start": 261,
                        "end": 265
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 257,
                      "end": 265
                    }
                  ],
                  "start": 255,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 251,
                "end": 267
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mh",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 275
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 281
                    },
                    "optional": false,
                    "computed": false,
                    "start": 277,
                    "end": 281
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "holiday",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 289
                  },
                  "optional": false,
                  "computed": false,
                  "start": 277,
                  "end": 289
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 273,
                "end": 289
              }
            ],
            "start": 203,
            "end": 291
          },
          "definite": false,
          "start": 199,
          "end": 291
        }
      ],
      "declare": false,
      "start": 195,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
