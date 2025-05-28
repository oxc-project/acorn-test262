__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 435,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 64,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 179,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 79,
            "end": 126,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 86,
              "end": 126,
              "id": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 98,
                "end": 126,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 120,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 111,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 119,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 113,
                        "end": 119
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 132,
            "end": 177,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 139,
              "end": 177,
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 150,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 151,
                    "end": 152,
                    "name": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 154,
                "end": 177,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 171,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 167,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 169,
                        "end": 170,
                        "typeName": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
      "start": 181,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 190,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 191,
        "end": 435,
        "body": [
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
                "end": 215,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 216,
                "end": 244,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 226,
                    "end": 238,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 229,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 229,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 250,
            "end": 259,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 254,
                "end": 258,
                "id": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 258,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 258,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 257,
                      "end": 258,
                      "typeName": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 258,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 264,
            "end": 279,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 268,
                "end": 278,
                "id": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 270,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 273,
                  "end": 278,
                  "object": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 278,
                    "decorators": [],
                    "name": "foo",
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
            "type": "VariableDeclaration",
            "start": 293,
            "end": 308,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 297,
                "end": 307,
                "id": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 299,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 302,
                  "end": 307,
                  "object": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 307,
                    "decorators": [],
                    "name": "bar",
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
            "type": "ExportNamedDeclaration",
            "start": 315,
            "end": 360,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 322,
              "end": 360,
              "id": {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 333,
                "end": 336,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 334,
                    "end": 335,
                    "name": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 335,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 337,
                "end": 360,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 347,
                    "end": 354,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 350,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 352,
                        "end": 353,
                        "typeName": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
          },
          {
            "type": "VariableDeclaration",
            "start": 366,
            "end": 383,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 370,
                "end": 382,
                "id": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 382,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 382,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 382,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 374,
                        "end": 382,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 375,
                            "end": 381
                          }
                        ]
                      }
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
            "start": 388,
            "end": 403,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 402,
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 394,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 397,
                  "end": 402,
                  "object": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 398,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 402,
                    "decorators": [],
                    "name": "foo",
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
            "type": "VariableDeclaration",
            "start": 417,
            "end": 432,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 421,
                "end": 431,
                "id": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 423,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 426,
                  "end": 431,
                  "object": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 431,
                    "decorators": [],
                    "name": "bar",
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
