__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 2,
              "raw": "2"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 40,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 40,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 31,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 39,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 97,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 65,
        "end": 97,
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 82,
                "end": 89,
                "decorators": [],
                "name": "_brand1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
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
      "start": 99,
      "end": 157,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 106,
        "end": 157,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 142,
                "end": 149,
                "decorators": [],
                "name": "_brand2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 149,
                "end": 154,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 151,
                  "end": 154
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
      "start": 159,
      "end": 211,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 166,
        "end": 211,
        "id": {
          "type": "Identifier",
          "start": 176,
          "end": 182,
          "decorators": [],
          "name": "FooBar",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 183,
          "end": 211,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 186,
              "end": 209,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 193,
                "end": 209,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 197,
                    "end": 208,
                    "id": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 204,
                      "decorators": [],
                      "name": "member1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 207,
                      "end": 208,
                      "value": 2,
                      "raw": "2"
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 285,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 220,
        "end": 285,
        "id": {
          "type": "Identifier",
          "start": 230,
          "end": 236,
          "decorators": [],
          "name": "FooBar",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 237,
          "end": 285,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 259,
              "end": 283,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 266,
                "end": 283,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 270,
                    "end": 282,
                    "id": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 277,
                      "decorators": [],
                      "name": "member2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 280,
                      "end": 282,
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
        "kind": "namespace",
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
      "start": 287,
      "end": 324,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 294,
        "end": 324,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 300,
          "end": 306,
          "decorators": [],
          "name": "Kettle",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 307,
          "end": 324,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 310,
              "end": 322,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 310,
                "end": 317,
                "decorators": [],
                "name": "member1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 320,
                "end": 321,
                "value": 2,
                "raw": "2"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
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
      "start": 326,
      "end": 380,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 333,
        "end": 380,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 339,
          "end": 345,
          "decorators": [],
          "name": "Kettle",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 346,
          "end": 380,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 365,
              "end": 378,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 365,
                "end": 372,
                "decorators": [],
                "name": "member2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 375,
                "end": 377,
                "value": 42,
                "raw": "42"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
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
      "start": 382,
      "end": 401,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 389,
        "end": 401,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 393,
            "end": 400,
            "id": {
              "type": "Identifier",
              "start": 393,
              "end": 396,
              "decorators": [],
              "name": "Pot",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 399,
              "end": 400,
              "value": 2,
              "raw": "2"
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 408,
          "end": 410,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 432,
      "end": 478,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 439,
        "end": 478,
        "id": {
          "type": "Identifier",
          "start": 444,
          "end": 452,
          "decorators": [],
          "name": "Utensils",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 453,
          "end": 478,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 456,
              "end": 461,
              "id": {
                "type": "Identifier",
                "start": 456,
                "end": 461,
                "decorators": [],
                "name": "Spoon",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 464,
              "end": 468,
              "id": {
                "type": "Identifier",
                "start": 464,
                "end": 468,
                "decorators": [],
                "name": "Fork",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 471,
              "end": 476,
              "id": {
                "type": "Identifier",
                "start": 471,
                "end": 476,
                "decorators": [],
                "name": "Knife",
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
      "start": 480,
      "end": 534,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 487,
        "end": 534,
        "id": {
          "type": "Identifier",
          "start": 492,
          "end": 500,
          "decorators": [],
          "name": "Utensils",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 501,
          "end": 534,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 523,
              "end": 532,
              "id": {
                "type": "Identifier",
                "start": 523,
                "end": 528,
                "decorators": [],
                "name": "Spork",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 531,
                "end": 532,
                "value": 3,
                "raw": "3"
              },
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
