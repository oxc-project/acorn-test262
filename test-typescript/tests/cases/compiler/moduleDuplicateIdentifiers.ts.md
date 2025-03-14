moduleDuplicateIdentifiers.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 535,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 40,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 31,
            "end": 39,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 39,
              "raw": "42",
              "value": 42
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 97,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 65,
        "end": 97,
        "body": {
          "type": "TSInterfaceBody",
          "start": 79,
          "end": 97,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 82,
              "end": 95,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 89,
                "decorators": [],
                "name": "_brand1",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 99,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 106,
        "end": 157,
        "body": {
          "type": "TSInterfaceBody",
          "start": 120,
          "end": 157,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 142,
              "end": 155,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 142,
                "end": 149,
                "decorators": [],
                "name": "_brand2",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 149,
                "end": 154,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 151,
                  "end": 154
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 159,
      "end": 211,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 166,
        "end": 211,
        "body": {
          "type": "TSModuleBlock",
          "start": 183,
          "end": 211,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 186,
              "end": 209,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 193,
                "end": 209,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 197,
                    "end": 208,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 204,
                      "decorators": [],
                      "name": "member1",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 207,
                      "end": 208,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 176,
          "end": 182,
          "decorators": [],
          "name": "FooBar",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 285,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 220,
        "end": 285,
        "body": {
          "type": "TSModuleBlock",
          "start": 237,
          "end": 285,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 259,
              "end": 283,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 266,
                "end": 283,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 270,
                    "end": 282,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "decorators": [],
                      "name": "member2",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 280,
                      "end": 282,
                      "raw": "42",
                      "value": 42
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 230,
          "end": 236,
          "decorators": [],
          "name": "FooBar",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 324,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 294,
        "end": 324,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 307,
          "end": 324,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 310,
              "end": 322,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 310,
                "end": 317,
                "decorators": [],
                "name": "member1",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 320,
                "end": 321,
                "raw": "2",
                "value": 2
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 300,
          "end": 306,
          "decorators": [],
          "name": "Kettle",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 326,
      "end": 380,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 333,
        "end": 380,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 346,
          "end": 380,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 365,
              "end": 378,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 365,
                "end": 372,
                "decorators": [],
                "name": "member2",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 375,
                "end": 377,
                "raw": "42",
                "value": 42
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 339,
          "end": 345,
          "decorators": [],
          "name": "Kettle",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 382,
      "end": 401,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 389,
        "end": 401,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 393,
            "end": 400,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 393,
              "end": 396,
              "decorators": [],
              "name": "Pot",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 399,
              "end": 400,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 411,
      "expression": {
        "type": "AssignmentExpression",
        "start": 402,
        "end": 410,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 405,
          "decorators": [],
          "name": "Pot",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 408,
          "end": 410,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 432,
      "end": 478,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 439,
        "end": 478,
        "body": {
          "type": "TSEnumBody",
          "start": 453,
          "end": 478,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 456,
              "end": 461,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 456,
                "end": 461,
                "decorators": [],
                "name": "Spoon",
                "optional": false
              }
            },
            {
              "type": "TSEnumMember",
              "start": 464,
              "end": 468,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 464,
                "end": 468,
                "decorators": [],
                "name": "Fork",
                "optional": false
              }
            },
            {
              "type": "TSEnumMember",
              "start": 471,
              "end": 476,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 471,
                "end": 476,
                "decorators": [],
                "name": "Knife",
                "optional": false
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 444,
          "end": 452,
          "decorators": [],
          "name": "Utensils",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 480,
      "end": 534,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 487,
        "end": 534,
        "body": {
          "type": "TSEnumBody",
          "start": 501,
          "end": 534,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 523,
              "end": 532,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 523,
                "end": 528,
                "decorators": [],
                "name": "Spork",
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 531,
                "end": 532,
                "raw": "3",
                "value": 3
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 492,
          "end": 500,
          "decorators": [],
          "name": "Utensils",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
