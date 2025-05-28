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
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 31,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 32,
                "end": 39,
                "body": []
              },
              "abstract": false,
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
      "start": 42,
      "end": 64,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 59,
                "end": 61,
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 94,
                "end": 96,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 97,
                "end": 104,
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
            "type": "VariableDeclaration",
            "start": 109,
            "end": 126,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 125,
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 117,
                  "end": 125,
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 123,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 148,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 139,
                  "end": 147,
                  "callee": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 145,
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
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
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 159,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 171,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 208,
                "end": 215,
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
            "start": 220,
            "end": 240,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 227,
              "end": 240,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 231,
                  "end": 239,
                  "id": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 234,
                    "decorators": [],
                    "name": "b10",
                    "optional": false,
                    "typeAnnotation": null
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 262,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 261,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 253,
                  "end": 261,
                  "callee": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 259,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
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
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 288,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 273,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 285,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 318,
                "end": 320,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 321,
                "end": 328,
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
            "type": "VariableDeclaration",
            "start": 333,
            "end": 350,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 349,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 341,
                  "end": 349,
                  "callee": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 347,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 367,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 366,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 366,
                  "decorators": [],
                  "name": "b10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 372,
            "end": 389,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 376,
                "end": 388,
                "id": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 377,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 380,
                  "end": 388,
                  "callee": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 386,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
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
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 415,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 400,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 412,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 439,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 424,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 434,
                "end": 436,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
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
