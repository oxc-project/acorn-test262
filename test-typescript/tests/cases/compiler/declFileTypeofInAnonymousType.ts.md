__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 116,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 38,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 38,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 31,
                "end": 38,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 114,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 50,
              "end": 114,
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 67,
                  "end": 74,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 74,
                    "name": "weekday",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 84,
                  "end": 91,
                  "id": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 91,
                    "name": "weekend",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 101,
                  "end": 108,
                  "id": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 108,
                    "name": "holiday",
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
                "start": 57,
                "end": 114,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 67,
                    "end": 74,
                    "id": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 74,
                      "name": "weekday",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 84,
                    "end": 91,
                    "id": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 91,
                      "name": "weekend",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 101,
                    "end": 108,
                    "id": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 108,
                      "name": "holiday",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 136,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 124,
                "end": 136,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 126,
                    "end": 134,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 129,
                        "end": 133,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 129,
                          "end": 133,
                          "left": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 131,
                            "name": "m1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 146,
            "end": 173,
            "properties": [
              {
                "type": "Property",
                "start": 152,
                "end": 159,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 155,
                  "end": 159,
                  "object": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 157,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 165,
                "end": 171,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
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
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 183,
            "end": 193,
            "properties": [
              {
                "type": "Property",
                "start": 185,
                "end": 191,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 187,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 191,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
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
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 203,
            "end": 291,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 223,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 212,
                  "end": 223,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 214,
                      "end": 221,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 217,
                        "name": "mod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 221,
                        "name": "m1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 229,
                "end": 245,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 231,
                  "name": "mc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 233,
                  "end": 245,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 235,
                      "end": 243,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 237,
                        "name": "cl",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 239,
                        "end": 243,
                        "object": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 241,
                          "name": "m1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "name": "c",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 251,
                "end": 267,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 253,
                  "name": "me",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 255,
                  "end": 267,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 257,
                      "end": 265,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 259,
                        "name": "en",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 261,
                        "end": 265,
                        "object": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 263,
                          "name": "m1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 265,
                          "name": "e",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 273,
                "end": 289,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 275,
                  "name": "mh",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 277,
                  "end": 289,
                  "object": {
                    "type": "MemberExpression",
                    "start": 277,
                    "end": 281,
                    "object": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 279,
                      "name": "m1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 289,
                    "name": "holiday",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
