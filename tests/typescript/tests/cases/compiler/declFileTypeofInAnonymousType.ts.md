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
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 31,
                "end": 38,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "weekday",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "weekend",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "holiday",
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 136,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 133,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 155,
                  "end": 159,
                  "object": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 157,
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "decorators": [],
                    "name": "c",
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
              },
              {
                "type": "Property",
                "start": 165,
                "end": 171,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 167,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 171,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 194,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 187,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 191,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 292,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 217,
                        "decorators": [],
                        "name": "mod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 221,
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 229,
                "end": 245,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 231,
                  "decorators": [],
                  "name": "mc",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 237,
                        "decorators": [],
                        "name": "cl",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 239,
                        "end": 243,
                        "object": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 241,
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 243,
                          "decorators": [],
                          "name": "c",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 251,
                "end": 267,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 253,
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 259,
                        "decorators": [],
                        "name": "en",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 261,
                        "end": 265,
                        "object": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 263,
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 265,
                          "decorators": [],
                          "name": "e",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 273,
                "end": 289,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 275,
                  "decorators": [],
                  "name": "mh",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 289,
                    "decorators": [],
                    "name": "holiday",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
