__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 435,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 126,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 70,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 25,
              "end": 70,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 35,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 36,
                "end": 70,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 46,
                    "end": 64,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 53,
                      "end": 64,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 57,
                          "end": 63,
                          "id": {
                            "type": "Identifier",
                            "start": 57,
                            "end": 58,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 61,
                            "end": 63,
                            "value": 42,
                            "raw": "42"
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
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 124,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 83,
              "end": 124,
              "id": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 97,
                "end": 124,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 118,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 109,
                      "end": 117,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 111,
                        "end": 117
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 128,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 139,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 140,
        "end": 246,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 146,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 157,
              "end": 191,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 167,
                  "end": 185,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 174,
                    "end": 185,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 178,
                        "end": 184,
                        "id": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 179,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 182,
                          "end": 184,
                          "value": 42,
                          "raw": "42"
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 197,
            "end": 244,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 204,
              "end": 244,
              "id": {
                "type": "Identifier",
                "start": 214,
                "end": 217,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 218,
                "end": 244,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 228,
                    "end": 238,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 229,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 231,
                        "end": 237
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
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
      "start": 248,
      "end": 268,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 257,
            "end": 267,
            "object": {
              "type": "MemberExpression",
              "start": 257,
              "end": 265,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 262,
                "end": 265,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 316,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 327,
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 328,
        "end": 435,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 334,
            "end": 386,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 341,
              "end": 386,
              "id": {
                "type": "Identifier",
                "start": 348,
                "end": 351,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 352,
                "end": 386,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 362,
                    "end": 380,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 369,
                      "end": 380,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 373,
                          "end": 379,
                          "id": {
                            "type": "Identifier",
                            "start": 373,
                            "end": 374,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 377,
                            "end": 379,
                            "value": 42,
                            "raw": "42"
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
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 392,
            "end": 433,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 405,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 406,
              "end": 433,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 417,
                  "end": 427,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 418,
                    "end": 426,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 420,
                      "end": 426
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
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
