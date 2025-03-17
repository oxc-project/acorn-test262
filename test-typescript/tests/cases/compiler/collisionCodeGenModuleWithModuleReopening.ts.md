__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 439,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 41,
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
        "end": 41,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 39,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 39,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 31,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 32,
                "end": 39,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 52,
            "end": 63,
            "callee": {
              "type": "MemberExpression",
              "start": 56,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 56,
                "end": 58,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 59,
                "end": 61,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 65,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 75,
        "end": 150,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 81,
            "end": 104,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 88,
              "end": 104,
              "id": {
                "type": "Identifier",
                "start": 94,
                "end": 96,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 97,
                "end": 104,
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
            "type": "VariableDeclaration",
            "start": 109,
            "end": 126,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 125,
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 117,
                  "end": 125,
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 123,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 139,
                  "end": 147,
                  "callee": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 145,
                    "name": "m1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 162,
            "end": 173,
            "callee": {
              "type": "MemberExpression",
              "start": 166,
              "end": 171,
              "object": {
                "type": "Identifier",
                "start": 166,
                "end": 168,
                "name": "m1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 171,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 176,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 185,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 186,
        "end": 264,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 215,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 199,
              "end": 215,
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 208,
                "end": 215,
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
            "start": 220,
            "end": 240,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 227,
              "end": 240,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 231,
                  "end": 239,
                  "id": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 234,
                    "name": "b10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 237,
                    "end": 239,
                    "value": 10,
                    "raw": "10"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 262,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 261,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 253,
                  "end": 261,
                  "callee": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 259,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 273,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 276,
            "end": 287,
            "callee": {
              "type": "MemberExpression",
              "start": 280,
              "end": 285,
              "object": {
                "type": "Identifier",
                "start": 280,
                "end": 282,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 285,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 289,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 298,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 299,
        "end": 391,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 305,
            "end": 328,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 312,
              "end": 328,
              "id": {
                "type": "Identifier",
                "start": 318,
                "end": 320,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 321,
                "end": 328,
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
            "type": "VariableDeclaration",
            "start": 333,
            "end": 350,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 349,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 341,
                  "end": 349,
                  "callee": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 347,
                    "name": "m2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 367,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 366,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 366,
                  "name": "b10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 372,
            "end": 389,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 376,
                "end": 388,
                "id": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 377,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 380,
                  "end": 388,
                  "callee": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 386,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 400,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 403,
            "end": 414,
            "callee": {
              "type": "MemberExpression",
              "start": 407,
              "end": 412,
              "object": {
                "type": "Identifier",
                "start": 407,
                "end": 409,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 412,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 424,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 427,
            "end": 438,
            "callee": {
              "type": "MemberExpression",
              "start": 431,
              "end": 436,
              "object": {
                "type": "Identifier",
                "start": 431,
                "end": 433,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 434,
                "end": 436,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
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
