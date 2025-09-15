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
        "start": 10,
        "end": 12
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
                "start": 32,
                "end": 33
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 34,
                "end": 41
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 41
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
                "start": 58,
                "end": 59
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
                      "start": 70,
                      "end": 77
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 70,
                    "end": 77
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "weekend",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 94
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 87,
                    "end": 94
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "holiday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 111
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 104,
                    "end": 111
                  }
                ],
                "start": 60,
                "end": 117
              },
              "const": false,
              "declare": false,
              "start": 53,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 117
          }
        ],
        "start": 13,
        "end": 119
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 119
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
                      "start": 129,
                      "end": 130
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
                            "start": 132,
                            "end": 134
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 135,
                            "end": 136
                          },
                          "start": 132,
                          "end": 136
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 136
                      },
                      "start": 130,
                      "end": 136
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 129,
                    "end": 137
                  }
                ],
                "start": 127,
                "end": 139
              },
              "start": 125,
              "end": 139
            },
            "start": 124,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 139
        }
      ],
      "declare": false,
      "start": 120,
      "end": 140
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
            "start": 145,
            "end": 146
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
                  "start": 155,
                  "end": 156
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 160
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "optional": false,
                  "computed": false,
                  "start": 158,
                  "end": 162
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 155,
                "end": 162
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
                  "start": 168,
                  "end": 170
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 174
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 174
              }
            ],
            "start": 149,
            "end": 176
          },
          "definite": false,
          "start": 145,
          "end": 176
        }
      ],
      "declare": false,
      "start": 141,
      "end": 177
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
            "start": 182,
            "end": 183
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
                  "start": 188,
                  "end": 190
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 194
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 188,
                "end": 194
              }
            ],
            "start": 186,
            "end": 196
          },
          "definite": false,
          "start": 182,
          "end": 196
        }
      ],
      "declare": false,
      "start": 178,
      "end": 197
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
            "start": 202,
            "end": 203
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
                  "start": 212,
                  "end": 213
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
                        "start": 217,
                        "end": 220
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 224
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 217,
                      "end": 224
                    }
                  ],
                  "start": 215,
                  "end": 226
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 212,
                "end": 226
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
                  "start": 232,
                  "end": 234
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
                        "start": 238,
                        "end": 240
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 244
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 242,
                        "end": 246
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 238,
                      "end": 246
                    }
                  ],
                  "start": 236,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 232,
                "end": 248
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
                  "start": 254,
                  "end": 256
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
                        "start": 260,
                        "end": 262
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 264,
                          "end": 266
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 267,
                          "end": 268
                        },
                        "optional": false,
                        "computed": false,
                        "start": 264,
                        "end": 268
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 260,
                      "end": 268
                    }
                  ],
                  "start": 258,
                  "end": 270
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 270
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
                  "start": 276,
                  "end": 278
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
                      "start": 280,
                      "end": 282
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 284
                    },
                    "optional": false,
                    "computed": false,
                    "start": 280,
                    "end": 284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "holiday",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 292
                  },
                  "optional": false,
                  "computed": false,
                  "start": 280,
                  "end": 292
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 276,
                "end": 292
              }
            ],
            "start": 206,
            "end": 294
          },
          "definite": false,
          "start": 202,
          "end": 294
        }
      ],
      "declare": false,
      "start": 198,
      "end": 295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 295
}
```
